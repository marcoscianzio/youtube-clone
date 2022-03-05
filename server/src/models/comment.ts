import { Field, ObjectType } from "type-graphql";
import { User } from "./user";
import { Video } from "./video";
import { Vote } from "./vote";

@ObjectType()
export class Comment {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field(() => User, { nullable: true })
  author?: User | null;

  @Field()
  authorId: string;

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field()
  videoId: string;

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[] | null;

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[] | null;

  @Field(() => Comment, { nullable: true })
  parentComment?: Comment | null;

  @Field(() => String, { nullable: true })
  parentCommentId?: string | null;

  @Field(() => User, { nullable: true })
  repliedUser?: User | null;

  @Field(() => String, { nullable: true })
  repliedUserId?: string | null;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
