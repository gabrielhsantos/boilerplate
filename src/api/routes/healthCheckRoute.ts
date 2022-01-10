import * as express from 'express'
import { HealthCheckController } from '../controllers/healthCheck'

const healthCheckController = new HealthCheckController()
const healthCheck = express.Router()

healthCheck.get('/live', healthCheckController.live)
healthCheck.get('/ready', healthCheckController.ready)

export { healthCheck }
