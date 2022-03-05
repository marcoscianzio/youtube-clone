import { User } from "../../models/user";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../context";

@Resolver()
export class UserQuery {
  @Query(() => [User])
  async users(@Ctx() { prisma }: Context): Promise<User[]> {
    return await prisma.user.findMany();
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: Context): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        githubId: req.session.userId || "",
      },
    });

    return user || null;
  }

  @Query(() => User)
  async user(@Arg("id") id: string, @Ctx() { prisma }: Context): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        githubId: id,
      },
      include: {
        subscribed: true,
        subscribers: true,
        votes: true,
      },
    });

    if (!user) {
      throw new Error("no user was found");
    }

    return user;
  }

  @Query(() => [User])
  async mySubscriptions(@Ctx() { prisma, req }: Context): Promise<User[]> {
    return await prisma.user
      .findUnique({
        where: {
          githubId: req.session.userId,
        },
      })
      .subscribed({
        select: {
          pic: true,
          displayName: true,
          username: true,
          githubId: true,
        },
      });
  }
}
