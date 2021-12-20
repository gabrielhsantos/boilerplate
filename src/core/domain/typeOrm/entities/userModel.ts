import { Entity, Column, OneToMany } from 'typeorm'
import { BaseModel } from './baseModel'
import { Address } from './addressModel'

@Entity({ name: 'users' })
class User extends BaseModel {
  @Column()
  name: string

  @Column()
  document: string

  @Column({ type: 'date' })
  birthdate: Date

  @Column({ nullable: true, type: 'varchar' })
  phone?: string | null

  @Column()
  email: string

  @OneToMany(() => Address, address => address.user)
  address?: Address[]
}

export { User }
