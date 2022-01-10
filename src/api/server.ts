import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})
import { Container } from 'typedi'
import { app, env, MongoDBConnection, PostgresConnection } from '@config/_index'
import { dataLog, errorLog } from '@shared/utils/_index'

const connect = async () => {
  await Container.get(MongoDBConnection).connectDatabase()

  await Container.get(PostgresConnection).connectDatabase()
}

process.on('unhandledRejection', error => {
  errorLog({ msg: 'unhandledRejection', error })
})

process.on('uncaughtException', error => {
  errorLog({ msg: 'uncaughtException', error })
})

connect().then(() => {
  app.listen(env.api.port, () => {
    dataLog({ msg: `${env.api.name} running on port ${env.api.port}...` })
  })
})
