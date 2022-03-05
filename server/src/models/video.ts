import { Field, ObjectType } from "type-graphql";
import { Comment } from "./comment";
import { User } from "./user";
import { Vote } from "./vote";

@ObjectType()
export class Video {
  @Field()
  id: string;

  @Field()
  file: string;

  @Field()
  title: string;

  @Field()
  thumbnail?: string;

  @Field()
  duration?: number;

  @Field()
  views: number;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field()
  createdAt: Date;

  @Field(() => User, { nullable: true })
  author?: User | null;

  @Field()
  authorId: string;

  @Field()
  isPrivate: boolean;

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[] | null;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[] | null;

  @Field(() => [User], { nullable: true })
  history?: User[] | null;

  @Field(() => [User], { nullable: true })
  seeLater?: User[] | null;
}
