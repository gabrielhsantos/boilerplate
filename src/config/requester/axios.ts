import 'reflect-metadata'
import axios from 'axios'
import { IRequester } from '@shared/interfaces/config/IRequesters'

class Requester {
  async post(params: IRequester, resource: string, body: any, config?: any) {
    const request = axios.create(params)
    return await request.post(resource, body, config)
  }

  async get(params: IRequester, resource: string, config?: any) {
    const request = axios.create(params)
    return await request.get(resource, config)
  }

  async put(params: IRequester, resource: string, body: any, config?: any) {
    const request = axios.create(params)
    return await request.put(resource, body, config)
  }

  async delete(params: IRequester, resource: string, config?: any) {
    const request = axios.create(params)
    return await request.delete(resource, config)
  }
}

export { Requester }
