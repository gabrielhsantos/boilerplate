import * as Service from '@core/domain/useCases/user/_index'
import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import { success } from '@api/mappers/successResponse'

export class UserController {
  async saveUser(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.createUser.saveUser(req.body)

      return res.status(StatusCodes.CREATED).send(success('User created!'))
    } catch (error) {
      next(error)
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userList = await Service.findUser.findAll()

      return res.status(StatusCodes.OK).send(success('Success', userList))
    } catch (error) {
      next(error)
    }
  }

  async findPatientAndAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await Service.findUser.findPatientAndAddress(req.params.userId, req.query.withAddress === 'true')

      return res.status(StatusCodes.OK).send(success('Success', user))
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.updateUser.updateUser(req.body, req.params.userId)

      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (error) {
      next(error)
    }
  }

  async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.removeUser.removeUser(req.params.userId)

      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (error) {
      next(error)
    }
  }
}
