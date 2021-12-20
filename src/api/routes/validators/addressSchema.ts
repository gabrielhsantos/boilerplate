import * as Joi from 'joi'
import { SchemaValidator } from '@api/middlewares/validateSchema'

export const createAddress: SchemaValidator = {
  body: Joi.object({
    street: Joi.string().required(),
    number: Joi.string().required(),
    complement: Joi.string(),
    neighborhood: Joi.string(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postalCode: Joi.string().required(),
  }),
}

export const updateAddress: SchemaValidator = {
  body: Joi.object({
    street: Joi.string(),
    number: Joi.string(),
    complement: Joi.string(),
    neighborhood: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    postalCode: Joi.string(),
  }),
}
