import * as swaggerJsDoc from 'swagger-jsdoc'
import { env } from '@env/envConfig'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Documentação da API de listagem de produto',
      version: '1.0.0',
      description: 'MS voltado a criação e manutenção de listas de produtos.',
      contact: {
        name: 'Gabriel Santos',
        email: 'gab.henriquesantos@gmail.com',
      },
      servers: [env.docs.swagger.server],
    },
    host: env.docs.swagger.host,
    basePath: '/',
    tags: [
      {
        name: 'Clients',
        description: 'Endpoints para a listagem e manipulação de clientes.',
      },
      {
        name: 'ClientsProductsList',
        description: 'Endpoints para a listagem e manipulação da lista de produtos.',
      },
    ],
    securityDefinitions: {
      authorization: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    },
    schemes: env.docs.swagger.schemes,
  },
  apis: ['./**/*.ts'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

export default swaggerDocs
