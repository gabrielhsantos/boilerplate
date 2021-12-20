import { IItemDTO, IItemRepository, IItemUseCases } from '@shared/interfaces/_index'
import { ICreateItemInput } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'

export class CreateItemUseCase implements IItemUseCases {
  constructor(private itemRepository: IItemRepository) {}

  async saveItem(item: ICreateItemInput): Promise<IItemDTO> {
    const itensList = await this.itemRepository.getItensList!()
    const referenceId = itensList.length + 1

    this.validateItem(item, itensList)

    const payload: IItemDTO = { referenceId, ...item }

    return await this.itemRepository.saveItem!(payload)
  }

  private validateItem(inputItem: ICreateItemInput, itensList: IItemDTO[]) {
    const itemAlreadyExists = itensList.find(_ => {
      const sameName = _.name === inputItem.name
      const sameRealatedId = _.realatedId === inputItem.realatedId

      return sameName && sameRealatedId
    })

    if (itemAlreadyExists) {
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'Item already exists.',
      }
    }

    if (inputItem.realatedId) {
      const isValidRelatedId = itensList.find(_ => _.referenceId === inputItem.realatedId)

      if (!isValidRelatedId) {
        throw {
          statusCode: StatusCodes.BAD_REQUEST,
          errors: 'Related item not found.',
        }
      }
    }
  }
}
