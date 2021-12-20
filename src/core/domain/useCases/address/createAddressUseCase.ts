import { IUserDTO, IUserRepository, IAddressRepository, IAddressUseCases, IAddressDTO } from '@shared/interfaces/_index'
import { Address } from '@domain/typeOrm/entities/addressModel'
import { ICreateAddressInput } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/dateFormat'

export class CreateAddressUseCase implements IAddressUseCases {
  private userRepository: IUserRepository

  constructor(private addressRepository: IAddressRepository) {}

  async saveAddress(address: ICreateAddressInput, userId: string): Promise<Address | IUserDTO> {
    const user = await this.userRepository.findUserById!(userId!)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    const payload: IAddressDTO | Address = {
      ...address,
      active: true,
      createdAt: setDate({}),
    }

    return await this.addressRepository.saveAddress!(payload)
  }
}
