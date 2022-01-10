import { Requester } from '@config/_index'
import { env } from '@env/env'
import { IProviderProductResponse } from './IProviderProductResponse'
import { AxiosResponse } from 'axios'

class GetProviderProducts {
  private externalApiUrl = env.providers.externalApi

  async getProductById(productId: string): Promise<IProviderProductResponse> {
    const getProviderProducts: AxiosResponse = await new Requester().get(this.externalApiUrl, `/product/${productId}/`)

    const getProducts: IProviderProductResponse = getProviderProducts.data

    return getProducts
  }
}

export { GetProviderProducts }
