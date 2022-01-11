import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})
import { Container } from 'typedi'
import { app, env, MongoDBConnection, PostgresConnection } from '@config/_index'
import { errorLog, infoLog } from '@shared/utils/_index'
import { KafkaConnect } from '@shared/broker/broker-integration'

const connect = async () => {
  await Container.get(MongoDBConnection).connectDatabase()

  await Container.get(PostgresConnection).connectDatabase()

  await Container.get(KafkaConnect).connectBroker()
}

process.on('unhandledRejection', error => {
  errorLog({ msg: 'unhandledRejection', error })
})

process.on('uncaughtException', error => {
  errorLog({ msg: 'uncaughtException', error })
})

connect().then(() => {
  app.listen(env.api.port, () => {
    infoLog({ msg: `${env.api.name} running on port ${env.api.port}...` })
  })
})
