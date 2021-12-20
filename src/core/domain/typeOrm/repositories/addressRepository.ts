import { Service } from 'typedi'
import { Address } from '../entities/addressModel'
import { getRepository, Repository } from 'typeorm'
import { IAddressRepository } from '@shared/interfaces/core/IAddress'

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

  private repository: Repository<Address>

  bootstrap() {
    this.repository = getRepository(Address)
  }

  public async saveAddress(address: Address): Promise<Address> {
    return await this.repository.save(address)
  }

  public async updateAddress(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await this.repository.update(filter, data)
  }

  public async removeAddress(id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await this.repository.update(filter, { active: false })
  }
}

export default Address
