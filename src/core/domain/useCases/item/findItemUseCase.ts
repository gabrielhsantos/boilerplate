import { IItemDTO, IItemRepository, IItemUseCases } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'

export class FindItemUseCase implements IItemUseCases {
  constructor(private itemRepository: IItemRepository) {}

  async getItenById(id: number): Promise<IItemDTO | undefined> {
    const item = await this.itemRepository.getItenById!(id)

    if (!item) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Item not found.',
      }
    }

    return item
  }

  async getItensList(name?: string): Promise<IItemDTO[]> {
    return await this.itemRepository.getItensList!(name)
  }
}
