import * as mongoose from 'mongoose'
import { env } from '@env/env'
import { IDatabase } from '@shared/interfaces/config/IDatabase'
import { Service } from 'typedi'
import { infoLog, errorLog } from '@shared/utils/loggerFormat'

@Service()
class MongoDBConnection implements IDatabase {
  private url: string

  constructor() {
    this.url = env.databases.mongoDB.url
  }

  private async connection() {
    try {
      await mongoose.connect(this.url, {
        dbName: env.databases.mongoDB.database,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
    } catch (error) {
      errorLog({ msg: 'Error while connection mongoose', error })
      process.exit(1)
    }
  }

  async connectDatabase(): Promise<void> {
    await this.connection()
    infoLog({ msg: 'MongoDB connected' })
  }
}

export { MongoDBConnection }
