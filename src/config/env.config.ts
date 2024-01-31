import * as process from 'process';

export const EnvConfig = () => ({
  ENVIRONMENT: process.env.NODE_ENV || 'dev',
  DB_NAME: process.env.DB_NAME || 'db_asgenius_site',
  MONGODB: process.env.MONGODB,
  PORT: process.env.PORT || 3000,
  DEFAULT_LIMIT: process.env.DEFAULT_LIMIT || 10,
  MAILER_HOST: process.env.MAILER_HOST || 'smtp.google.com',
  MAILER_USER: process.env.MAILER_USER || 'raydel9206@gmail.com',
  MAILER_PASS: process.env.MAILER_PASS || 'ynto efiv jrjt zaxb',
  MAILER_PORT: process.env.MAILER_PORT || 465,
});
