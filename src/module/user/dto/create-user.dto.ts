import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;
  
    @IsString()
    @IsNotEmpty()
    lastName: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
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
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
      minLength: 8,
      minLowercase: 1,
    })
    passwordConfirm: string;
  
    @IsNotEmpty()
    @IsBoolean({
      always: true,
    })
    acceptTerm: boolean;
  }
  