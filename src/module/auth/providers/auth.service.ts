import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
    UnprocessableEntityException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import * as process from 'process';
  import * as bcrypt from 'bcrypt';
  
  import { CreateUserDto } from 'src/module/user/dto/create-user.dto';
  import HandlerException from 'src/function/HandlerException';
  import { UserService } from 'src/module/user/user.service';
  import { CodeService } from 'src/module/code/providers/code.service';
  import { ValidateUserDto } from 'src/module/auth/dto/validate-user.dto';
  import { LoginDto } from 'src/module/auth/dto/login.dto';
  import { MailService } from 'src/module/mail/providers/mail.service';
  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly userService: UserService,
      private readonly codeService: CodeService,
      private readonly jwtService: JwtService,
      private readonly mailService: MailService,
    ) {}
    async register(createUserDto: CreateUserDto) {
      try {
        const user = await this.userService.create(createUserDto);
        if (!user || !user.id) {
          throw new InternalServerErrorException(`The user can\'t created`);
        }
        const code = await this.codeService.create({
          user: user,
        });
        if (code) {
          try {
            await this.mailService.confirmation(user, code);
          } catch (e) {
            console.log(`The email has not send`, e);
          }
        }
  
        return user;
      } catch (e) {
        HandlerException(e);
      }
    }
  
    async validate(validateUser: ValidateUserDto): Promise<boolean> {
      try {
        const user = await this.userService.findOneByEmail(validateUser.email);
        if (!user || user.isActive) {
          throw new UnprocessableEntityException(
            `The can\'t validated this code ${validateUser.code}`,
          );
        }
        const code = await this.codeService.validate({
          user: user,
          code: validateUser.code,
        });
        if (!code) {
          return false;
        }
        const userUpdated = await user.updateOne(
          { isActive: true },
          { new: true },
        );
        return userUpdated.acknowledged && userUpdated.modifiedCount;
      } catch (e) {
        HandlerException(e);
      }
    }
  
    async login(loginDto: LoginDto) {
      
    }
  }
  