import { Logger } from '@config/_index'

interface IDataLog {
  msg: string
  data?: any
}

interface IErrorLog {
  msg?: string
  error: any
}

interface IDebugLog {
  msg: string
  data: any
}

interface IEventLog {
  msg: string
  eventType: string
}

const dataLog = async (params: IDataLog) => {
  const { msg, data } = params

  const log = data ? `[DataLog] ${msg}: ${JSON.stringify(data)}` : `[DataLog] ${msg}`

  Logger.data(log)
}

const infoLog = async (params: IDataLog) => {
  const { msg, data } = params

  const log = data ? `[InfoLog] ${msg}: ${JSON.stringify(data)}` : `[InfoLog] ${msg}`

  Logger.info(log)
}

const errorLog = async (params: IErrorLog) => {
  const { msg, error } = params

  const errorMessage = `${msg}: ` || 'Error: '

  Logger.error(errorMessage, error)
}

const debugLog = async (params: IDebugLog) => {
  const { msg, data } = params

  Logger.debug(`[DebugLog] ${msg}`, data)
}

const eventLog = async (params: IEventLog) => {
  const { msg, eventType } = params

  const log = `[${eventType}]: ${msg}`

  Logger.info(log)
}

export { dataLog, errorLog, debugLog, eventLog, infoLog }
