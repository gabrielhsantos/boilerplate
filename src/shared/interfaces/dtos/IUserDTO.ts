import { IAddressDTO } from './IAddressDTO'

export interface IUserDTO {
  id?: number
  name: string
  document: string
  birthdate: Date
  phone?: string | null
  email: string
  active: boolean
  uuid?: string
  createdAt?: Date
  updateAt?: Date
  address?: IAddressDTO[]
}
