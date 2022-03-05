import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../../context";
import { VoteInput } from "../../input/vote";
import { Video } from "../../models/video";

@Resolver()
export class VoteMutation {
  @Mutation(() => Boolean)
  async vote(
    @Arg("values", { validate: true }) values: VoteInput,
    @Ctx() { prisma, req }: Context
  ): Promise<Boolean> {
    const alreadyExistingVote = await prisma.vote.findFirst({
      where: {
        userId: req.session.userId,
        AND: {
          videoId: values.videoId,
          AND: {
            commentId: values.commentId,
          },
        },
      },
    });

    if (alreadyExistingVote) {
      if (alreadyExistingVote.value === values.value) {
        await prisma.vote.delete({
          where: {
            id: alreadyExistingVote.id,
          },
        });
      } else {
        await prisma.vote.update({
          where: {
            id: alreadyExistingVote.id,
          },
          data: {
            value: values.value,
          },
        });
      }
    } else {
      await prisma.vote.create({
        data: values,
      });
    }

    return true;
  }

  @Query(() => [Video])
  async myVotes(@Ctx() { prisma, req }: Context): Promise<Video[]> {
    const response = await prisma.vote.findMany({
      where: {
        userId: req.session.userId,
        AND: {
          value: 1,
        },
      },
      select: {
        video: {
          include: {
            author: {
              select: {
                githubId: true,
                displayName: true,
                username: true,
              },
            },
          },
        },
      },
    });

    const videos = Array.from(response, (x) => x.video) as Video[];

    return videos;
  }
}
