import { ConnectionOptions } from 'typeorm'
import { env } from './src/config/env/env'
import { User } from './src/core/domain/typeOrm/entities/userModel'
import { Address } from './src/core/domain/typeOrm/entities/addressModel'

const migrationsPath = './src/core/infrastructure/migrations'
const postgres = env.databases.postgres
export default {
  type: 'postgres',
  port: postgres.port,
  host: postgres.host,
  username: postgres.username,
  password: postgres.password,
  database: postgres.database,
  entities: [User, Address],
  synchronize: true,
  logging: true,
  migrations: [`${migrationsPath}/*.ts`],
  cli: {
    migrationsDir: migrationsPath,
  },
} as ConnectionOptions
