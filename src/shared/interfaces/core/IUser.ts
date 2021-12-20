import { IUserDTO } from '@shared/interfaces/_index'
import { User } from '@domain/typeOrm/entities/userModel'

export interface ICreateUserInput {
  name: string
  document: string
  birthdate: Date
  phone?: string
  email: string
}

export interface IRemoveUserPayload {
  active: boolean
  updateAt: Date
}

export interface IUpdateUserInput {
  name?: string
  document?: string
  birthdate?: Date
  phone?: string
  email?: string
  updateAt: Date
}

export interface IUserRepository extends IUserDTO {
  saveUser?(user: User | IUserDTO): Promise<User | IUserDTO>
  findAll?(): Promise<User[] | IUserDTO[]>
  findPatientAndAddress?(id: string | number, needAddress: boolean): Promise<User | IUserDTO | undefined>
  findOneWithParams(filter: string): Promise<User | IUserDTO | undefined>
  findUserById?(id: string | number): Promise<User | IUserDTO | undefined>
  updateUser?(data: any, id: string | number): Promise<void>
  removeUser?(data: any, id: string | number): Promise<void>
}

export interface IUserUseCase {
  saveUser?(data: ICreateUserInput): Promise<User | IUserDTO>
  findAll?(): Promise<User[] | IUserDTO[]>
  findPatientAndAddress?(id: string | number, needAddress: boolean): Promise<User | IUserDTO | undefined>
  findOneWithParams?(filter: string): Promise<User | IUserDTO | undefined>
  findUserById?(id: string | number): Promise<User | IUserDTO | undefined>
  updateUser?(data: IUpdateUserInput, id: string | number): Promise<void>
  removeUser?(id: string | number): Promise<void>
}
