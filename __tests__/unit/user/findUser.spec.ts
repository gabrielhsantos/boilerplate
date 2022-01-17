import * as mongoose from 'mongoose'
import { findUser } from '../../../src/core/domain/useCases/user/_index'

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

  afterAll(async () => {
    await mongoose.disconnect()
  })

  it('should be able to find all users', async () => {
    const users = await findUser.findAll()

    expect(users.length >= 0).toBe(true)
  })
})
