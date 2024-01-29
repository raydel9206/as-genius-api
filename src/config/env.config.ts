import * as process from 'process';

export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  dbName: process.env.DB_NAME || 'db_asgenius_site',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 10,
  mailerHost: process.env.MAILER_HOST,
  mailerUser: process.env.MAILER_USER,
  mailerPass: process.env.MAILER_PASS,
  publicUrl: process.env.PUBLIC_URL || 'https://www.asgenius.com',
  mailerPort: process.env.MAILER_PORT || 465,
});
