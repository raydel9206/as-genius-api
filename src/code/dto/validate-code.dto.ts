import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeDto } from './create-code.dto';
import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateCodeDto extends PartialType(CreateCodeDto) {
  @IsString()
  @Length(8, 8)
  @ApiProperty()
  code: string;
}
