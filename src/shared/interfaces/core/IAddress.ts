import { IUserDTO, IAddressDTO } from '@shared/interfaces/_index'
import { Address } from '@domain/typeOrm/entities/addressModel'

export interface ICreateAddressInput {
  userId: number
  street: string
  number: string
  complement?: string
  neighborhood?: string
  city: string
  state: string
  postalCode: string
}

export interface IRemoveAddressPayload {
  active: boolean
  updateAt: Date
}

export interface IUpdateAddressInput {
  userId: number
  street?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string
  postalCode?: string
  updateAt: Date
}

export interface IAddressRepository extends IAddressDTO {
  saveAddress?(address: Address | IAddressDTO, userId?: string | number): Promise<Address | IUserDTO>
  updateAddress?(data: any, id: string | number): Promise<void>
  removeAddress?(data: any, id: string | number): Promise<void>
}

export interface IAddressUseCases {
  saveAddress?(address: ICreateAddressInput, userId: string): Promise<Address | IUserDTO>
  updateAddress?(data: IUpdateAddressInput, userId: string): Promise<void>
  removeAddress?(userId: string): Promise<void>
}
