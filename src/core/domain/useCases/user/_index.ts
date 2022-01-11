import { UserRepository } from '@core/domain/typeOrm/repositories/userRepository'
// import { UserRepository } from '@domain/mongoose/repositories/userRepository'
import { UserService } from '@core/services/user'
import { Container } from 'typedi'
import { CreateUserUseCase } from './createUserUseCase'
import { FindUserUseCase } from './findUserUseCase'
import { RemoveUserUseCase } from './removeUserUseCase'
import { UpdateUserUseCase } from './updateUserUseCase'

const userRepository = Container.get(UserRepository)

const createUserUseCase = new CreateUserUseCase(userRepository)
const createUser = new UserService(createUserUseCase)

const findUserUseCase = new FindUserUseCase(userRepository)
const findUser = new UserService(findUserUseCase)

const removeUserUseCase = new RemoveUserUseCase(userRepository)
const removeUser = new UserService(removeUserUseCase)

const updateUserUseCase = new UpdateUserUseCase(userRepository)
const updateUser = new UserService(updateUserUseCase)

export { createUser, findUser, removeUser, updateUser }
