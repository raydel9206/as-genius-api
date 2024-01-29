import * as joi from 'joi';
export const envSchemaJoi = joi.object({
  MONGODB: joi.required(),
  PORT: joi.number().default(3000),
  DEFAULT_LIMIT: joi.number().default(100),
  DB_NAME: joi.required(),
  MAILER_HOST: joi.required().default('smtps.aruba.it:465'),
  MAILER_USER: joi.required(),
  MAILER_PASS: joi.required(),
  PUBLIC_URL: joi.required().default('https://www.asgenius.com'),
  MAILER_PORT: joi.number().required().default(465),
});
