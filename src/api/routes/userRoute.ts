import * as express from 'express'
import { authMiddleware } from '@api/middlewares/auth'
import { UserController } from '../controllers/user'
import { validateSchema } from '@api/middlewares/validateSchema'
import { createUser, updateUser } from './validators/userSchema'

const userController = new UserController()
const users = express.Router()

users.post('/', authMiddleware, validateSchema(createUser), userController.saveUser)
users.get('/', authMiddleware, userController.findAll)
users.get('/:userId', authMiddleware, userController.findPatientAndAddress)
users.patch('/:userId', validateSchema(updateUser), authMiddleware, userController.updateUser)
users.delete('/:userId', authMiddleware, userController.removeUser)

export { users }
