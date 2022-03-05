import { Video } from "../../models/video";
import { Arg, Ctx, ID, Mutation, Resolver } from "type-graphql";
import { Context } from "../../context";
import { CreateVideoInput } from "../../input/video";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Resolver()
export class VideoMutation {
  @Mutation(() => Video)
  async createVideo(
    @Arg("values", { validate: true }) values: CreateVideoInput,
    @Ctx() { prisma, req }: Context
  ): Promise<Video> {
    return await prisma.video.create({
      data: {
        ...values,
        author: {
          connect: {
            githubId: req.session.userId,
          },
        },
      },
    });
  }

  @Mutation(() => Boolean)
  async seeLater(@Arg("id") id: string, @Ctx() { prisma, req }: Context) {
    try {
      await prisma.seeLater.create({
        data: {
          user: {
            connect: {
              githubId: req.session.userId,
            },
          },
          video: {
            connect: {
              id,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          await prisma.seeLater.delete({
            where: {
              videoId_userId: {
                userId: req.session.userId!,
                videoId: id,
              },
            },
          });
        }
      }
    }

    return true;
  }
}
