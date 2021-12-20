import { Service } from 'typedi'
import { User } from '../entities/userModel'
import { getRepository, Repository } from 'typeorm'
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

  private repository: Repository<User>

  bootstrap() {
    this.repository = getRepository(User)
  }

  public async saveUser(user: User): Promise<User> {
    return await this.repository.save(user)
  }

  public async findAll(): Promise<User[]> {
    return await this.repository.find({})
  }

  public async findPatientAndAddress(id: string | number, needAddress: boolean): Promise<User | undefined> {
    let response = this.repository.createQueryBuilder()

    response = needAddress
      ? response.innerJoin('user.address', 'address')
      : response.leftJoin('user.address', 'address')

    return response.where('uuid = :uuid', { uuid: id }).getOne()
  }

  public async findOneWithParams(filter: string): Promise<User | undefined> {
    return await this.repository
      .createQueryBuilder()
      .where('(document = :document)', {
        document: `%${filter}%`,
      })
      .getOne()
  }

  public async findUserById(id: string | number): Promise<User | undefined> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    return await this.repository.findOne({
      where: filter,
    })
  }

  public async updateUser(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await this.repository.update(filter, data)
  }

  public async removeUser(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await this.repository.update(filter, data)
  }
}

export default User
