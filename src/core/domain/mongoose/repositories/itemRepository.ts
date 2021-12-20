import { Service } from 'typedi'
import { IItemDTO } from '@shared/interfaces/_index'
import { Items } from '@core/domain/mongoose/entities/itensModel'
import { IItemRepository } from '@shared/interfaces/core/IItem'

@Service()
export class ItemRepository implements IItemRepository {
  id?: string
  referenceId: number
  name: string
  realatedId?: number | undefined

  public async saveItem(item: IItemDTO): Promise<IItemDTO> {
    return await Items.create(item)
  }

  public async getItenById(id: number): Promise<IItemDTO | undefined> {
    return await Items.findOne({ realatedId: id })
  }

  public async getItensList(name?: string): Promise<IItemDTO[]> {
    const filter = name ? { name } : {}

    return await Items.find(filter)
  }
}

export default ItemRepository
