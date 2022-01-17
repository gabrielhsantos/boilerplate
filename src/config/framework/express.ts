// import '../tracer/datadog'
import * as express from 'express'
import * as cors from 'cors'
import * as routesFile from '@api/routes/_index'
import * as swaggerUi from 'swagger-ui-express'
import swaggerDocs from '@config/docs/swaggerConfig'
import { Route } from '@shared/enums/routes'
import { healthCheck } from '@api/routes/healthCheckRoute'
import { errorHandler } from '@api/middlewares/errorHandler'
import { json, text, raw, urlencoded } from 'body-parser'

const router = express.Router()
Object.keys(routesFile).forEach(key => {
  router.use(`/api/v1/${Route[key]}`, routesFile[key])
})

const app: express.Application = express()
app
  .use(json())
  .use(text())
  .use(raw())
  .use(urlencoded({ extended: true }))
  .use(
    cors({
      origin: '*',
      methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  )
  .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  .use('/', healthCheck)
  .use(router)
  .all('*', (req, res, next: express.NextFunction) => {
    next({ errors: `Endpoint not found!` })
  })
  .use(errorHandler)

export { app }
