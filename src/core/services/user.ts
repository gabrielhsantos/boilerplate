import { ICreateUserInput, IUpdateUserInput, IUserDTO } from '@shared/interfaces/_index'
import { User } from '@domain/typeOrm/entities/userModel'
import { IUserUseCase } from '@shared/interfaces/_index'

export class UserService {
  constructor(private userUseCase: IUserUseCase) {}

  async saveUser(data: ICreateUserInput): Promise<User | IUserDTO> {
    return await this.userUseCase.saveUser!({ ...data })
  }

  async findAll(): Promise<User[] | IUserDTO[]> {
    return await this.userUseCase.findAll!()
  }

  async findPatientAndAddress(id: string | number, needAddress: boolean): Promise<User | IUserDTO | undefined> {
    return await this.userUseCase.findPatientAndAddress!(id, needAddress)
  }

  async findOneWithParams(filter: string): Promise<User | IUserDTO | undefined> {
    return await this.userUseCase.findOneWithParams!(filter)
  }

  async findUserById(id: string | number): Promise<User | IUserDTO | undefined> {
    return await this.userUseCase.findUserById!(id)
  }

  async updateUser(data: IUpdateUserInput, id: string | number): Promise<void> {
    await this.userUseCase.updateUser!(data, id)
  }

  async removeUser(id: string | number): Promise<void> {
    await this.userUseCase.removeUser!(id)
  }
}
