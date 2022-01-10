import { IEnv } from '@shared/interfaces/config/IEnv'

const env: IEnv = {
  api: {
    name: (process.env.API_NAME as string) || 'Boilerplate',
    port: parseInt((process.env.API_PORT as string) || '3001'),
    loggerOn: process.env.LOGGER_ON === 'true',
  },
  databases: {
    mongoDB: {
      url: process.env.DB_MONGO_URL as string,
      database: process.env.DB_MONGO as string,
    },
    postgres: {
      database: process.env.DB_POSTGRES as string,
      host: process.env.DB_POSTGRES_HOST as string,
      port: parseInt(process.env.DB_POSTGRES_PORT as string) || 5432,
      username: process.env.DB_POSTGRES_USER as string,
      password: process.env.DB_POSTGRES_PASSWORD as string,
      dialect: process.env.DB_POSTGRES_DIALECT as string,
      logging: process.env.DB_POSTGRES_LOGGING === 'true',
      timezone: (process.env.DB_POSTGRES_TIMEZONE as string) || 'UTC',
      schema: process.env.DB_POSTGRES_SCHEMA as string,
    },
  },
  docs: {
    swagger: {
      schemes: process.env.SWAGGER_SCHEMES as string,
      host: process.env.SWAGGER_HOST as string,
      server: process.env.SWAGGER_SERVER as string,
    },
  },
  providers: {
    externalApi: {
      baseURL: process.env.EXTERNAL_API as string,
      timeout: parseInt(process.env.TIMEOUT as string) || 10000,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
}

export { env }
