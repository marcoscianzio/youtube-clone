import { Field, ObjectType } from "type-graphql";
import { Comment } from "./comment";
import { User } from "./user";
import { Video } from "./video";

@ObjectType()
export class Vote {
  @Field()
  id: string;

  @Field()
  value: number;

  @Field(() => String, { nullable: true })
  videoId?: string | null;

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field(() => String, { nullable: true })
  userId?: string | null;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => String, { nullable: true })
  commentId?: string | null;

  @Field(() => Comment, { nullable: true })
  comment?: Comment | null;

  @Field()
  createdAt: Date;
}
