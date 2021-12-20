import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})
import { Container } from 'typedi'
import { app, env, MongoDBConnection, PostgresConnection } from '@config/_index'
import { dataLog, errorLog } from '@shared/utils/_index'

const connect = async () => {
  await Container.get(MongoDBConnection)
    .connectDatabase()
    .catch(error => {
      errorLog({ msg: 'Error on connect to MONGO database', error })
      process.exit(1)
    })

  await Container.get(PostgresConnection)
    .connectDatabase()
    .catch(error => {
      errorLog({ msg: 'Error on connect to POSTGRES database', error })
      process.exit(1)
    })
}

process.on('unhandledRejection', error => {
  errorLog({ msg: 'unhandledRejection', error })
})

process.on('uncaughtException', error => {
  errorLog({ msg: 'uncaughtException', error })
})

process.on('exit', error => {
  errorLog({ msg: 'exit', error })
})

connect()
  .then(() => {
    app.listen(env.api.port)
    dataLog({ msg: `${env.api.name} running on port ${env.api.port}...` })
  })
  .catch(error => {
    errorLog({ msg: 'Fail to start service...', error })
  })
