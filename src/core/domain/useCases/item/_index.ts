import { Container } from 'typedi'
import { ItemRepository } from '@domain/mongoose/repositories/itemRepository'
import { ItemService } from '@core/services/item'
import { CreateItemUseCase } from './createItemUseCase'
import { FindItemUseCase } from './findItemUseCase'

const itemRepository = Container.get(ItemRepository)

const createItemUseCase = new CreateItemUseCase(itemRepository)
const createItem = new ItemService(createItemUseCase)

const findItemUseCase = new FindItemUseCase(itemRepository)
const findItem = new ItemService(findItemUseCase)

export { createItem, findItem }
