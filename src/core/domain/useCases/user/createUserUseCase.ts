import { IUserDTO, IUserRepository, IUserUseCase } from '@shared/interfaces/_index'
import { User } from '@domain/typeOrm/entities/userModel'
import { ICreateUserInput } from '@shared/interfaces/_index'
import { StatusCodes } from 'http-status-codes'
import { setDate } from '@shared/utils/dateFormat'
import { Service } from 'typedi'

@Service()
export class CreateUserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async saveUser(user: ICreateUserInput): Promise<User | IUserDTO> {
    const userAlreadyExists = await this.userRepository.findOneWithParams!({ document: user.document })

    if (userAlreadyExists) {
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'User already exists.',
      }
    }

    const payload: IUserDTO | User = {
      ...user,
      active: true,
      createdAt: setDate({}),
    }

    return await this.userRepository.saveUser!(payload)
  }
}
