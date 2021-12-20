import { IItemDTO } from '@shared/interfaces/_index'

export interface ICreateItemInput {
  name: string
  realatedId?: number
}

export interface IItemRepository extends IItemDTO {
  saveItem?(item: IItemDTO): Promise<IItemDTO>
  getItenById(id: number): Promise<IItemDTO | undefined>
  getItensList(name?: string): Promise<IItemDTO[]>
}

export interface IItemUseCases {
  saveItem?(item: ICreateItemInput): Promise<IItemDTO | undefined>
  getItenById?(id: number): Promise<IItemDTO | undefined>
  getItensList?(name?: string): Promise<IItemDTO[]>
}
