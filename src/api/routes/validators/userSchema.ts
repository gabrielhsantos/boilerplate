import * as Joi from 'joi'
import { SchemaValidator } from '@api/middlewares/validateSchema'

export const createUser: SchemaValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    document: Joi.string().required(),
    birthdate: Joi.string().required(),
    phone: Joi.string(),
    email: Joi.string().email().required(),
  }),
}

export const updateUser: SchemaValidator = {
  body: Joi.object({
    name: Joi.string(),
    document: Joi.string(),
    birthdate: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
  }),
}
