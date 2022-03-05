import { Comment } from "../../models/comment";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../context";
import { CreateCommentInput } from "../../input/comment";

@Resolver()
export class CommentMutation {
  @Mutation(() => Comment)
  async createComment(
    @Arg("values") values: CreateCommentInput,
    @Ctx() { prisma, req }: Context
  ): Promise<Comment> {
    return await prisma.comment.create({
      data: { ...values, authorId: req.session.userId as string },
    });
  }
}
