import * as path from 'path'
import { createConnection } from 'typeorm'
import { env } from '@env/envConfig'
import { User } from '@core/domain/typeOrm/entities/userModel'
import { Address } from '@core/domain/typeOrm/entities/addressModel'
import { IDatabase } from '@shared/interfaces/config/IDatabase'
import { Service } from 'typedi'

const basePath = path.join(__dirname, '@core/infrastructure', 'migrations/**/*{.ts,.js}')

@Service()
class PostgresConnection implements IDatabase {
  private isConnected: boolean

  constructor() {
    this.isConnected = false
  }

  private async connection() {
    const postgres = env.databases.postgres

    await createConnection({
      type: 'postgres',
      host: postgres.host,
      username: postgres.username,
      password: postgres.password,
      database: postgres.database,
      entities: [User, Address],
      migrations: [basePath],
      migrationsRun: true,
    })

    this.isConnected = true
  }

  async connectDatabase() {
    if (this.isConnected) {
      return this.isConnected
    }

    await this.connection()

    return this.isConnected
  }
}

export { PostgresConnection }
