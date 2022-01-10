import * as winston from 'winston'
import { env } from '@env/env'

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    data: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    error: 'red',
    warn: 'orange',
    data: 'white',
    info: 'green',
    debug: 'yellow',
  },
}

const loggerOn = env.api.loggerOn

const splitter: string = loggerOn ? `\n${'='.repeat(80)}\n` : ''

const printer = (): winston.Logform.Format => {
  if (splitter) {
    return winston.format.printf(log => `${splitter}${log.message}${splitter}`)
  }

  return winston.format.json()
}

const formats = [winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' })]

if (loggerOn) {
  winston.addColors(myCustomLevels.colors)
  formats.push(winston.format.colorize({ all: true }))
}

const format = winston.format.combine(...formats, printer())

const transports = [new winston.transports.Console()]

const Logger = winston.createLogger({
  level: 'debug',
  levels: myCustomLevels.levels,
  format,
  transports,
})

export { Logger }
