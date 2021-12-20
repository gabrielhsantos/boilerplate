import { ICreateAddressInput, IUpdateAddressInput, IUserDTO } from '@shared/interfaces/_index'
import { Address } from '@domain/typeOrm/entities/addressModel'
import { IAddressUseCases } from '@shared/interfaces/_index'

export class AddressService {
  constructor(private addressUseCase: IAddressUseCases) {}

  async saveAddress(address: ICreateAddressInput, userId: string): Promise<Address | IUserDTO> {
    return await this.addressUseCase.saveAddress!(address, userId)
  }

  async updateAddress(data: IUpdateAddressInput, userId: string): Promise<void> {
    await this.updateAddress!(data, userId)
  }

  async removeAddress(userId: string): Promise<void> {
    await this.removeAddress!(userId)
  }
}
