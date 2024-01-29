import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/module/user/entities/user.entity';
import * as mongoose from 'mongoose';

@Schema()
export class Code extends Document {
  @Prop({
    type: String,
    unique: true,
    index: true,
  })
  code: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  owner: User;

  @Prop({
    type: Date,
    required: true,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    required: true,
  })
  updatedAt: Date;

  @Prop({
    type: Date,
    required: false,
  })
  usedAt?: Date;
}

export const CodeSchema = SchemaFactory.createForClass(Code);
