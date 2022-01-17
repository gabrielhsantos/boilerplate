import * as mongoose from 'mongoose'
import Container from 'typedi'
import { UserRepository } from '../../../src/core/domain/mongoose/repositories/userRepository'
import { createUser, findUser } from '../../../src/core/domain/useCases/user/_index'
import { mockUser } from '../../testMock'

const userRepository = Container.get(UserRepository)

describe('Import', () => {
  beforeAll(async () => {
    if (!process.env.DB_MONGO_URL) {
      throw new Error('MongoDB server not initialized')
    }

    await mongoose.connect(process.env.DB_MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  })

  beforeEach(async () => {
    await userRepository.deleteMany()
  })

  afterAll(async () => {
    await userRepository.deleteMany()
    await mongoose.disconnect()
  })

  it('should be able to create new users', async () => {
    const newUser = mockUser()

    await createUser.saveUser(newUser)
    const users = await findUser.findAll()

    expect(users).toEqual([expect.objectContaining(newUser)])
  })

  it('should not be able to create a new user if already exists in the base ', async () => {
    try {
      const newUser = mockUser()

      await createUser.saveUser(newUser)
      await createUser.saveUser(newUser)
    } catch (error) {
      expect(error).toEqual({ errors: 'User already exists.', statusCode: 400 })
    }
  })
})
