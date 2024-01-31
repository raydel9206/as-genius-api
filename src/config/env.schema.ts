import * as joi from 'joi';
export const envSchemaJoi = joi.object({
  MONGODB: joi.required(),
  PORT: joi.number().default(3000),
  DEFAULT_LIMIT: joi.number().default(100),
  DB_NAME: joi.required(),
  MAILER_HOST: joi.required().default('smtp.google.com'),
  MAILER_USER: joi.required().default('raydel9206@gmail.com'),
  MAILER_PASS: joi.required().default('ynto efiv jrjt zaxb'),
  MAILER_PORT: joi.number().required().default(465),
});
