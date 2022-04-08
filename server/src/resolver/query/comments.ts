import { Comment } from "../../models/comment";
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
class CommentPagination {
  @Field(() => [Comment])
  comments: Comment[];

  @Field()
  hasMore: boolean;
}

@Resolver()
export class CommentQuery {
  @Query(() => CommentPagination)
  async videoComments(
    @Args() { cursor, take }: PaginationArgs,
    @Arg("id") id: string,
    @Ctx() { prisma }: Context
  ): Promise<CommentPagination> {
    const realTake = take! + 1;

    const comments = await prisma.video
      .findUnique({
        where: {
          id,
        },
      })
      .comments({
        where: {
          parentCommentId: null,
        },
        orderBy: {
          createdAt: "asc",
        },
        take: realTake,
        cursor,
        include: {
          author: {
            select: {
              displayName: true,
              username: true,
              githubId: true,
              verified: true,
              pic: true,
            },
          },
          repliedUser: {
            select: {
              username: true,
            },
          },
        },
      });

    const hasMore = comments.length === realTake;

    return { comments: comments.slice(0, take), hasMore };
  }

  @Query(() => CommentPagination)
  async commentReplies(
    @Args() { cursor, take }: PaginationArgs,
    @Arg("parentCommentId") parentCommentId: string,
    @Ctx() { prisma }: Context
  ): Promise<CommentPagination> {
    const realTake = take! + 1;

    const comments = await prisma.comment.findMany({
      where: {
        parentCommentId: parentCommentId,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: realTake,
      cursor,
      include: {
        author: {
          select: {
            username: true,
            githubId: true,
            pic: true,
          },
        },
      },
    });

    const hasMore = comments.length === realTake;

    return { comments: comments.slice(0, take), hasMore };
  }
}
