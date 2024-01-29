import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeDto } from './create-code.dto';
import { IsString, Length } from 'class-validator';

export class ValidateCodeDto extends PartialType(CreateCodeDto) {
  @IsString()
  @Length(8, 8)
  code: string;
}
