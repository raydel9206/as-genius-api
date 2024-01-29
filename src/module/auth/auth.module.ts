import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';

import { AuthController } from 'src/module/auth/auth.controller';
import { UserModule } from 'src/module/user/user.module';
import { CodeModule } from 'src/module/code/code.module';
import { AuthService } from 'src/module/auth/providers/auth.service';
import { AuthGuard } from 'src/module/auth/guard/auth.guard';
import { MailModule } from 'src/module/mail/mail.module';
import { RolesGuard } from 'src/module/auth/guard/roles.guard';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    CodeModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
    MailModule,
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
