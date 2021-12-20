import * as Joi from 'joi'
import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export interface SchemaValidator {
  body?: Joi.Schema
  query?: Joi.Schema
  params?: Joi.Schema
}

interface ValidationResult {
  bodyError?: Joi.ValidationError
  queryError?: Joi.ValidationError
  parameterError?: Joi.ValidationError
}

export const validateSchema = (schema: SchemaValidator) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validateResult: ValidationResult = {}

    if (schema.body) validateResult.bodyError = schema.body.validate(req.body).error

    if (schema.query) validateResult.queryError = schema.query.validate(req.query).error

    if (schema.params) validateResult.parameterError = schema.params.validate(req.params).error

    const valid = !validateResult.bodyError && !validateResult.parameterError && !validateResult.queryError

    if (!valid) {
      const details = (validateResult.bodyError ? validateResult.bodyError.details : [])
        .concat(validateResult.parameterError ? validateResult.parameterError.details : [])
        .concat(validateResult.queryError ? validateResult.queryError.details : [])

      const message = details.map(detail => detail.message).join(' \n ')
      return res.status(StatusCodes.BAD_REQUEST).json({ message: message })
    }

    next()
  }
}
