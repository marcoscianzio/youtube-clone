import { ArgsType, Field, InputType, Int } from "type-graphql";

@InputType()
class CursorArg {
  @Field()
  id: string;
}

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => CursorArg, { nullable: true })
  cursor?: CursorArg | undefined;
}
