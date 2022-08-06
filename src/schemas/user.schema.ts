import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop()
  locked : boolean;

  @Prop()
  enabled : boolean;

  @Prop()
  picture : string;

  @Prop()
  address : string;

  @Prop()
  cin : string;

  @Prop()
  phone : string;

  @Prop()
  role: string

}


export const UserSchema = SchemaFactory.createForClass(User);

