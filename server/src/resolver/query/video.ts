import { Video } from "../../models/video";
import {
  Arg,
  Args,
  Ctx,
  Field,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Context } from "../../context";
import { PaginationArgs } from "../../args/pagination";

@ObjectType()
class VideoPagination {
  @Field(() => [Video])
  videos: Video[];

  @Field()
  hasMore: boolean;
}

@Resolver()
export class VideoQuery {
  @Query(() => Video)
  async video(
    @Arg("id") id: string,
    @Ctx() { prisma, req }: Context
  ): Promise<Video> {
    const video = await prisma.video.update({
      data: {
        views: {
          increment: 1,
        },
      },
      where: {
        id,
      },
      include: {
        author: true,
      },
    });

    if (!video) {
      throw new Error("no video was found");
    }

    await prisma.user.update({
      where: {
        githubId: req.session.userId,
      },
      data: {
        history: {
          create: {
            videoId: video.id,
          },
        },
      },
    });

    return video;
  }

  @Query(() => VideoPagination)
  async videos(
    @Args() { take, cursor }: PaginationArgs,
    @Ctx() { prisma }: Context
  ): Promise<VideoPagination> {
    const realTake = take! + 1;

    let videos = null;

    if (cursor) {
      videos = await prisma.video.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: realTake,
        cursor: {
          id: cursor,
        },
        include: {
          author: {
            select: {
              githubId: true,
              displayName: true,
              username: true,
              verified: true,
              pic: true,
            },
          },
        },
      });
    } else {
      videos = await prisma.video.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: realTake,
        include: {
          author: {
            select: {
              githubId: true,
              displayName: true,
              username: true,
              verified: true,
              pic: true,
            },
          },
        },
      });
    }

    const hasMore = videos.length === realTake;

    return { videos: videos.slice(0, take), hasMore };
  }

  @Query(() => VideoPagination, { nullable: true })
  async subsVideos(
    @Args() { take, cursor }: PaginationArgs,
    @Ctx() { prisma, req }: Context
  ): Promise<VideoPagination | null> {
    const realTake = take! + 1;

    let subscribedIds: any[] = await prisma.user.findMany({
      where: {
        subscribers: {
          some: {
            githubId: req.session.userId,
          },
        },
      },
      select: {
        githubId: true,
      },
    });

    if (subscribedIds.length < 1) {
      return null;
    }

    subscribedIds = Array.from(subscribedIds, (x) => x.githubId);

    const videos = await prisma.video.findMany({
      where: {
        authorId: {
          in: subscribedIds,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      take: realTake,
      cursor: {
        createdAt: cursor,
      },
    });

    const hasMore = videos.length === realTake;

    return { videos: videos.slice(0, take), hasMore };
  }

  @Query(() => VideoPagination)
  async seeLater(
    @Args() { cursor, take }: PaginationArgs,
    @Ctx() { prisma, req }: Context
  ): Promise<VideoPagination> {
    const realTake = take! + 1;

    let videos: any[] = await prisma.user
      .findUnique({
        where: {
          githubId: req.session.userId,
        },
      })
      .seeLater({
        select: {
          video: true,
        },
        orderBy: {
          addedAt: "asc",
        },
        take: realTake,
        cursor: {
          addedAt: cursor,
        },
      });

    videos = Array.from(videos, (x) => x.video);

    const hasMore = videos.length === realTake;

    return { videos: videos.slice(0, take), hasMore };
  }
}