import { Field, ObjectType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class Admin {
  // @Field({ nullable: false, description: 'user id' })
  // @IsString()
  // readonly _id: string;

  @Field({ nullable: true, description: 'name' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'age' })
  @IsString()
  readonly age: string;
}

@ObjectType()
export class AdminDef {
  @Field({ nullable: false, description: 'user id' })
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @Field({ nullable: true, description: 'status' })
  readonly status: boolean;
}
