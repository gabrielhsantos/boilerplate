import { IRemoveUserPayload, IUserRepository, IUserUseCase } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/_index'

export class RemoveUserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async removeUser(id: string | number): Promise<void> {
    const user = await this.userRepository.findUserById!(id)

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

    await this.userRepository.removeUser!(payload, id)
  }
}
