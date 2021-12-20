import { PrimaryGeneratedColumn, Column } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

export abstract class BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: () => uuidv4(), name: 'uuid' })
  uuid?: string

  @Column({ default: false, name: 'active' })
  active: boolean

  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date

  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt: Date
}
