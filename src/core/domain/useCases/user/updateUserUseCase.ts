import { IUpdateUserInput, IUserRepository, IUserUseCase } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/_index'

export class UpdateUserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async updateUser(data: IUpdateUserInput, id: string | number): Promise<void> {
    const user = await this.userRepository.findUserById!(id)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    const payload: IUpdateUserInput = {
      ...data,
      updateAt: setDate({}),
    }

    await this.userRepository.updateUser!(payload, id)
  }
}
