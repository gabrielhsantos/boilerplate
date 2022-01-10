import { errorLog } from '@shared/utils/loggerFormat'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): Response => {
  const message = err.errors || 'something went wrong!'
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  console.log(err)

  errorLog({ msg: 'Error', error: err })

  return res.status(statusCode).json({ message })
}

export { errorHandler }
