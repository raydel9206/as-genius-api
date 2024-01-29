import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envSchemaJoi } from 'src/config/env.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { CommonModule } from './module/common/common.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { EnvConfig } from 'src/config/env.config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: envSchemaJoi,
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: process.env.DB_NAME,
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        secure: true,
        port: 465,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <raydel9206@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    AuthModule,
    UserModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
