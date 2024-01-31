import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from 'src/auth/auth.controller';
import { UserModule } from 'src/user/user.module';
import { CodeModule } from 'src/code/code.module';
import { AuthService } from 'src/auth/providers/auth.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    CodeModule,
    JwtModule.register({
      global: true,
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
