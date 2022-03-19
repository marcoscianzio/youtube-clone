import { Field } from "type-graphql";
import { User } from "./user";
import { Video } from "./video";

export class History {
  @Field(() => Video)
  video: Video;

  @Field()
  videoId: string;

  @Field(() => [User])
  user: User;

  @Field()
  userId: string;

  @Field()
  addedAt: Date;
}
