import { IKafkaConfig } from './IBroker'
import { IRequester } from './IRequesters'

export interface IEnv {
  api: {
    name: string
    port: number
    loggerOn: boolean
  }
  databases: {
    mongoDB: {
      url: string
      database: string
    }
    postgres: {
      database: string
      host: string
      port: number
      username: string
      password: string
      dialect: string
      logging: boolean
      timezone: string
      schema: string
    }
  }
  kafka: {
    config: IKafkaConfig
    consumer: {
      group: {
        group: string
      }
      topic: {
        consumer: string
      }
    }
    producer: {
      producer: string
    }
  }
  docs: {
    swagger: {
      schemes: string
      host: string
      server: string
    }
  }
  providers: {
    externalApi: IRequester
  }
  jwt: {
    secret: string
  }
}
