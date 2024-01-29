import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ValidateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  code: string;
}
