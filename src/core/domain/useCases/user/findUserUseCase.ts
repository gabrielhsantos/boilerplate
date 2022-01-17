import { IUserDTO, IUserRepository, IUserUseCase } from '@shared/interfaces/_index'
import { User } from '@domain/typeOrm/entities/userModel'
import { StatusCodes } from 'http-status-codes'
import { Service } from 'typedi'

@Service()
export class FindUserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async findAll(): Promise<User[] | IUserDTO[]> {
    return await this.userRepository.findAll!()
  }

  async findPatientAndAddress(id: string | number, needAddress: boolean): Promise<User | IUserDTO | undefined> {
    const user = await this.userRepository.findPatientAndAddress!(id, needAddress)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    return user
  }

  async findOneWithParams(filter: string): Promise<User | IUserDTO | undefined> {
    const user = await this.userRepository.findUserById!(filter)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    return user
  }

  async findUserById(id: string | number): Promise<User | IUserDTO | undefined> {
    const user = await this.userRepository.findUserById!(id)

    if (!user) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'User not found.',
      }
    }

    return user
  }
}
