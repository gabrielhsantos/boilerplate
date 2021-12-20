import { ICreateItemInput, IItemDTO } from '@shared/interfaces/_index'
import { IItemUseCases } from '@shared/interfaces/_index'

export class ItemService {
  constructor(private itemUseCase: IItemUseCases) {}

  async saveItem(item: ICreateItemInput): Promise<IItemDTO | undefined> {
    return await this.itemUseCase.saveItem!(item)
  }

  async getItenById(id: number): Promise<IItemDTO | undefined> {
    return await this.itemUseCase.getItenById!(id)
  }

  async getItensList(): Promise<IItemDTO[]> {
    return await this.itemUseCase.getItensList!()
  }
}
