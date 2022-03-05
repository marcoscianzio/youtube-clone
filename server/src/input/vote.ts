import { IsIn, IsOptional, IsString, IsUUID } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class VoteInput {
  @IsIn([0, 1])
  @Field()
  value: number;

  @IsOptional()
  @IsUUID()
  @Field(() => String, { nullable: true })
  videoId?: string | null;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  commentId?: string | null;
}
