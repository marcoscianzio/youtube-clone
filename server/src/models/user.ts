import { Field, ObjectType } from "type-graphql";
import { Comment } from "./comment";
import { Video } from "./video";
import { Vote } from "./vote";

@ObjectType()
export class User {
  @Field()
  githubId?: string;

  @Field()
  username?: string;

  @Field()
  email?: string;

  @Field()
  displayName?: string;

  @Field()
  verified?: boolean;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  pic?: string | null;

  @Field(() => String, { nullable: true })
  banner?: string | null;

  @Field()
  location?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field(() => [Video], { nullable: true })
  videos?: Video[] | null;

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[] | null;

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[] | null;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[] | null;

  @Field(() => [User], { nullable: true })
  subscribers?: User[] | null;

  @Field(() => [User], { nullable: true })
  subscribed?: User[] | null;

  @Field(() => [Video], { nullable: true })
  history?: Video[] | null;

  @Field(() => [Video], { nullable: true })
  seeLater?: Video[] | null;
}
