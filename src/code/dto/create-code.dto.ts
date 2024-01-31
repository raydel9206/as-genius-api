import { User } from 'src/user/entities/user.entity';
import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCodeDto {
  @IsNotEmptyObject()
  @ApiProperty()
  user: Partial<User>;
}
