import { IRemoveUserPayload, IUserRepository, IAddressUseCases, IAddressRepository } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/_index'

export class RemoveAddressUseCase implements IAddressUseCases {
  private userRepository: IUserRepository

  constructor(private addressRepository: IAddressRepository) {}

  async removeAddress(userId: string): Promise<void> {
    const user = await this.userRepository.findUserById!(userId)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    const payload: IRemoveUserPayload = {
      active: false,
      updateAt: setDate({}),
    }

    await this.addressRepository.removeAddress!(payload, userId)
  }
}
