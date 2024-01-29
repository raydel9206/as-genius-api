import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
    minLength: 8,
    minLowercase: 1,
  })
  password: string;
}
