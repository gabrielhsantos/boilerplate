import * as Service from '@core/domain/useCases/address/_index'
import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import { success } from '@api/mappers/successResponse'

export class AddressController {
  async saveAddress(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.createAddress.saveAddress(req.body, req.params.userId)

      return res.status(StatusCodes.CREATED).send(success('Address created!'))
    } catch (error) {
      next(error)
    }
  }

  async updateAddress(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.updateAddress.updateAddress(req.body, req.params.userId)

      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (error) {
      next(error)
    }
  }

  async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.removeAddress.removeAddress(req.params.userId)

      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (error) {
      next(error)
    }
  }
}
