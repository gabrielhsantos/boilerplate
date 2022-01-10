import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'

export class HealthCheckController {
  async live(req: Request, res: Response, next: NextFunction) {
    try {
      const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
      }

      return res.send(healthcheck)
    } catch (error) {
      next(error)
    }
  }

  async ready(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(StatusCodes.NO_CONTENT).end()
    } catch (error) {
      next(error)
    }
  }
}
