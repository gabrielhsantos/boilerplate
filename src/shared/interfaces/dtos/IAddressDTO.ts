export interface IAddressDTO {
  id?: number
  userId?: number
  street: string
  number: string
  complement?: string | null
  neighborhood?: string | null
  city: string
  state: string
  postalCode: string
  uuid?: string
  active: boolean
  createdAt: Date
  updateAt?: Date
}
