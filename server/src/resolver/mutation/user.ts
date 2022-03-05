import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../context";

@Resolver()
export class UserMutation {
  @Mutation(() => Boolean)
  async toggleSubscribe(
    @Arg("id") id: string,
    @Ctx() { prisma, req }: Context
  ): Promise<Boolean> {
    if (id === req.session.userId) {
      throw new Error("you can't follow yourselve");
    }

    const user = await prisma.user.findUnique({
      where: {
        githubId: id,
      },
      select: {
        subscribers: {
          where: {
            githubId: req.session.userId,
          },
        },
      },
    });

    if (!user) {
      throw new Error("user not found");
    }

    const isAlreadySubscribe = user!.subscribers.length > 0;

    if (isAlreadySubscribe) {
      await prisma.user.update({
        where: {
          githubId: req.session.userId,
        },
        data: {
          subscribed: {
            disconnect: {
              githubId: id,
            },
          },
        },
      });
    } else {
      await prisma.user.update({
        where: {
          githubId: req.session.userId,
        },
        data: {
          subscribed: {
            connect: {
              githubId: id,
            },
          },
        },
      });
    }

    return true;
  }
}
