import * as mongoose from 'mongoose'
import { env } from '@env/envConfig'
import { IDatabase } from '@shared/interfaces/config/IDatabase'
import { Service } from 'typedi'

@Service()
class MongoDBConnection implements IDatabase {
  private url: string
  private isConnected: boolean

  constructor() {
    this.url = env.databases.mongoDB.url
    this.isConnected = false
  }

  private async connection() {
    mongoose
      .connect(this.url, {
        dbName: env.databases.mongoDB.database,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .catch(error => {
        console.error(`Error while connection mongoose`, error)
      })

    this.isConnected = true
  }

  async connectDatabase(): Promise<boolean> {
    if (this.isConnected) {
      return this.isConnected
    }

    await this.connection()

    return this.isConnected
  }
}

export { MongoDBConnection }
