import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateVideoInput {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @Field()
  file: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @Field()
  thumbnail: string;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  duration: number;

  @IsNotEmpty()
  @Length(1, 100)
  @IsString()
  @Field()
  title: string;

  @IsOptional()
  @IsString()
  @Length(1, 500)
  @Field(() => String, { nullable: true })
  description?: string;
}
