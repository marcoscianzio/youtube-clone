import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}
