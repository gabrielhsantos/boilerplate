import { Schema, model, Model } from 'mongoose'
import { IUserDTO } from '@shared/interfaces/_index'
import { AddressSchema } from './addressModel'

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    document: { type: String, required: true },
    birthdate: { type: Date, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    address: [AddressSchema],
    active: { type: Boolean, required: true },
    uuid: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'users',
  },
)

UserSchema.methods.toJSON = function castToJSON() {
  const obj = this.toObject()
  obj.id = obj._id
  delete obj._id
  delete obj.__v
  return obj
}

const User: Model<IUserDTO> = model('User', UserSchema)

export { User, UserSchema }
