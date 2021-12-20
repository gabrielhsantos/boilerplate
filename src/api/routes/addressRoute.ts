import * as express from 'express'
import { authMiddleware } from '@api/middlewares/auth'
import { AddressController } from '../controllers/address'
import { validateSchema } from '@api/middlewares/validateSchema'
import { createAddress, updateAddress } from './validators/addressSchema'

const addressController = new AddressController()
const address = express.Router()

address.post('/', authMiddleware, validateSchema(createAddress), addressController.saveAddress)
address.patch('/:userId', validateSchema(updateAddress), authMiddleware, addressController.updateAddress)
address.delete('/:userId', authMiddleware, addressController.removeUser)

export { address }
