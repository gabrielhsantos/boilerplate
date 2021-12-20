import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseModel } from './baseModel'
import { User } from './userModel'

@Entity({ name: 'address' })
class Address extends BaseModel {
  @ManyToOne(() => User, user => user.address)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  street: string

  @Column()
  number: string

  @Column({ nullable: true })
  complement?: string

  @Column({ nullable: true, type: 'varchar' })
  neighborhood?: string | null

  @Column()
  city: string

  @Column()
  state: string

  @Column({ name: 'postal_code' })
  postalCode: string
}

export { Address }
