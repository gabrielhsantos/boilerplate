import { Service } from 'typedi'
import { User } from '../entities/userModel'
import { getRepository } from 'typeorm'
import { IUserRepository } from '@shared/interfaces/core/IUser'
import { IAddressDTO } from '@shared/interfaces/_index'

@Service()
export class UserRepository implements IUserRepository {
  id?: number | undefined
  name: string
  document: string
  birthdate: Date
  phone?: string | null | undefined
  email: string
  active: boolean
  uuid?: string | undefined
  createdAt?: Date | undefined
  updateAt?: Date | undefined
  address?: IAddressDTO[] | undefined

  public saveUser(user: User): Promise<User> {
    return getRepository(User).save(user)
  }

  public findAll(): Promise<User[]> {
    return getRepository(User).find({})
    // return await getRepository(User).find({})
  }

  public async findPatientAndAddress(id: string | number, needAddress: boolean): Promise<User | undefined> {
    let response = getRepository(User).createQueryBuilder()

    response = needAddress
      ? response.innerJoin('user.address', 'address')
      : response.leftJoin('user.address', 'address')

    return response.where('uuid = :uuid', { uuid: id }).getOne()
  }

  public async findOneWithParams(filter: string): Promise<User | undefined> {
    return await getRepository(User)
      .createQueryBuilder()
      .where('(document = :document)', {
        document: `%${filter}%`,
      })
      .getOne()
  }

  public async findUserById(id: string | number): Promise<User | undefined> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    return await getRepository(User).findOne({
      where: filter,
    })
  }

  public async updateUser(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await getRepository(User).update(filter, data)
  }

  public async removeUser(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await getRepository(User).update(filter, data)
  }
}

export default User
