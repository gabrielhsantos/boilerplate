import { IUserRepository, IAddressUseCases, IAddressRepository, IUpdateAddressInput } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/_index'

export class UpdateAddressUseCase implements IAddressUseCases {
  private userRepository: IUserRepository

  constructor(private addressRepository: IAddressRepository) {}

  async updateAddress(data: IUpdateAddressInput, userId: string): Promise<void> {
    const user = await this.userRepository.findUserById!(userId)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    const payload: IUpdateAddressInput = {
      ...data,
      updateAt: setDate({}),
    }

    await this.addressRepository.updateAddress!(payload, userId)
  }
}
