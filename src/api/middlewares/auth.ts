import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { validateToken } from '@config/_index'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      validateToken(req.headers.authorization as string)

      next()
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Authorization header not found.',
      })
    }
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Unauthorized.',
    })
  }
}
