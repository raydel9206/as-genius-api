import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;
  
    @IsEmail()
    @ApiProperty()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsStrongPassword({
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
      minLength: 8,
      minLowercase: 1,
    })
    password: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsStrongPassword({
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
      minLength: 8,
      minLowercase: 1,
    })
    passwordConfirm: string;
  
    @IsNotEmpty()
    @ApiProperty()
    @IsBoolean({
      always: true,
    })
    acceptTerm: boolean;
  }
  