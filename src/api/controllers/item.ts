import * as Service from '@core/domain/useCases/item/_index'
import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import { success, itemResponse } from '@api/mappers/_index'

export class ItemController {
  async saveItem(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.createItem.saveItem(req.body)

      return res.status(StatusCodes.CREATED).send(success('Item created!'))
    } catch (error) {
      next(error)
    }
  }

  async getItensList(req: Request, res: Response, next: NextFunction) {
    try {
      const itensList = await Service.findItem.getItensList()

      return res.status(StatusCodes.OK).send(itemResponse(itensList))
    } catch (error) {
      next(error)
    }
  }
}
