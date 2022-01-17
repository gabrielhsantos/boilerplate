import { Service } from 'typedi'
import { IUserRepository, IUserDTO, IAddressDTO } from '@shared/interfaces/_index'
import { User } from '@core/domain/mongoose/entities/userModel'
import { v4 as uuidv4 } from 'uuid'

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

  public async saveUser(user: IUserDTO): Promise<IUserDTO> {
    user = { ...user, uuid: uuidv4() }

    return await User.create(user)
  }

  public async findAll(): Promise<IUserDTO[]> {
    return await User.find({})
  }

  public async findUserById(id: string | number): Promise<IUserDTO | undefined> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    return await User.findOne(filter)
  }

  public async findOneWithParams(params: object): Promise<IUserDTO | undefined> {
    const filter = params

    return await User.findOne(filter)
  }

  public async findPatientAndAddress(id: string | number): Promise<IUserDTO | undefined> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    return await User.findOne(filter)
  }

  public async updateUser(data: any, id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await User.updateOne(filter, {
      $set: data,
    })
  }

  public async removeUser(id: string | number): Promise<void> {
    const filter = typeof id === 'string' ? { uuid: id } : { id }

    await User.updateOne(filter, {
      $set: { active: false },
    })
  }

  public async deleteMany(): Promise<void> {
    await User.deleteMany()
  }
}

export default User
