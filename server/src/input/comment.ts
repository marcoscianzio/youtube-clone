import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCommentInput {
  @Field()
  @MinLength(1)
  @IsNotEmpty()
  @IsString()
  content: string;

  @Field()
  @IsUUID()
  @IsNotEmpty()
  videoId: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  parentCommentId?: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  repliedUserId?: string;
}
