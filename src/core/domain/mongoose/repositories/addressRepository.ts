import { Service } from 'typedi'
import { IAddressRepository, IUserDTO, IAddressDTO } from '@shared/interfaces/_index'
import { User } from '@core/domain/mongoose/entities/userModel'
import { v4 as uuidv4 } from 'uuid'

@Service()
export class AddressRepository implements IAddressRepository {
  id?: number | undefined
  userId?: number | undefined
  street: string
  number: string
  complement?: string | null | undefined
  neighborhood?: string | null | undefined
  city: string
  state: string
  postalCode: string
  uuid?: string | undefined
  active: boolean
  createdAt: Date
  updateAt?: Date | undefined

  public async saveAddress(address: IAddressDTO, userId?: string | number): Promise<IUserDTO> {
    address = { ...address, uuid: uuidv4() }

    return await User.updateOne(
      {
        uuid: userId! as string,
      },
      {
        $push: {
          address: address,
        },
      },
    )
  }

  public async updateAddress(data: any, id: string | number): Promise<void> {
    return await User.updateOne(
      {
        uuid: id! as string,
      },
      {
        $set: {
          [`address.$[event].${Object.keys(data)}`]: Object.values(data),
        },
      },
      {
        arrayFilters: [
          {
            [`event.active`]: true,
          },
        ],
      },
    )
  }

  public async removeAddress(id: string | number): Promise<void> {
    return await User.updateOne(
      {
        uuid: id! as string,
      },
      {
        $set: {
          'address.$.active': false,
        },
      },
    )
  }
}

export default AddressRepository
