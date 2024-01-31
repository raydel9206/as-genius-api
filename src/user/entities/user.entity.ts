import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/common/enum/roles.enum';
import { Exclude, Expose } from 'class-transformer';

@Schema()
export class User extends Document {
  @Prop(
    raw({
      firstName: { type: String, index: true },
      middleName: { type: String, required: false },
      lastName: { type: String, index: true },
    }),
  )
  name: Record<string, any>;

  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  @Exclude()
  password: string;

  @Prop(
    raw({
      codeCountry: { type: String, required: false },
      phoneNumber: { type: String, required: false },
    }),
  )
  phoneNumber?: Record<string, any>;

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
  deletedAt?: Date;

  @Prop({
    type: Boolean,
    required: true,
  })
  isActive: boolean;

  @Prop({
    type: Boolean,
    required: true,
  })
  acceptTerm: boolean;

  @Prop()
  roles: Role[];

  @Prop()
  @Exclude()
  salt: string;

  constructor(partial: Partial<User>) {
    super();
    partial.id = partial._id;
    delete partial._id;
    Object.assign(this, partial);
  }

  @Expose()
  get fullName(): string {
    return `${this.name.firstName} ${this.name.lastName}`;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
