import { User } from 'src/module/user/entities/user.entity';
import { IsNotEmptyObject } from 'class-validator';

export class CreateCodeDto {
  @IsNotEmptyObject()
  user: Partial<User>;
}
