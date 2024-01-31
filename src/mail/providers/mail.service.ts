import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/user/entities/user.entity';
import { Code } from 'src/code/entities/code.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async confirmation(user: User, code: Code) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: `Welcome to AsGenius, active your account `,
      template: './confirmation',
      context: {
        name: `${user?.name?.firstName} ${user?.name?.lastName}`,
        code: code.code,
        url: code.code,
      },
    });
  }
}
