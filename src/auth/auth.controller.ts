import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { ValidateUserDto } from 'src/auth/dto/validate-user.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { Public } from 'src/function/GlobalFunctions';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('auth')
@ApiTags('Autentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('register')
  @ApiBody({ description: 'Create a new user', type: CreateUserDto })
  @ApiOkResponse({ description: 'Register user' })
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Public()
  @Post('validate')
  @ApiOkResponse({ description: 'Validate email' })
  validate(@Body() validateUser: ValidateUserDto) {
    return this.authService.validate(validateUser);
  }

  @Public()
  @Post('login')
  @ApiOkResponse({ description: 'Login user' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
