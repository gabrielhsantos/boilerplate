import * as express from 'express'
import { ItemController } from '../controllers/item'

const itensController = new ItemController()
const itens = express.Router()

itens.post('/', itensController.saveItem)
itens.get('/', itensController.getItensList)

export { itens }
