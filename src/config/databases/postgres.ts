import * as path from 'path'
import { createConnection } from 'typeorm'
import { env } from '@env/env'
import { User } from '@core/domain/typeOrm/entities/userModel'
import { Address } from '@core/domain/typeOrm/entities/addressModel'
import { IDatabase } from '@shared/interfaces/config/IDatabase'
import { Service } from 'typedi'
import { dataLog, errorLog } from '@shared/utils/loggerFormat'

const basePath = path.join(__dirname, '@core/infrastructure', 'migrations/**/*{.ts,.js}')

@Service()
class PostgresConnection implements IDatabase {
  private async connection() {
    try {
      const postgres = env.databases.postgres

      await createConnection({
        type: 'postgres',
        port: postgres.port,
        host: postgres.host,
        username: postgres.username,
        password: postgres.password,
        database: postgres.database,
        entities: [User, Address],
        migrations: [basePath],
        migrationsRun: true,
      })
    } catch (error) {
      errorLog({ msg: 'Error while connection postgres', error })
      process.exit(1)
    }
  }

  async connectDatabase(): Promise<void> {
    await this.connection()
    dataLog({ msg: 'Postgres connected' })
  }
}

export { PostgresConnection }
