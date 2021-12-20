import { Schema, model, Model } from 'mongoose'
import { IAddressDTO } from '@shared/interfaces/_index'

const AddressSchema: Schema = new Schema(
  {
    id: { type: String, required: false },
    street: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: false },
    neighborhood: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    active: { type: Boolean, required: true },
    uuid: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'address',
  },
)

AddressSchema.methods.toJSON = function castToJSON() {
  const obj = this.toObject()
  obj.id = obj._id
  delete obj._id
  delete obj.__v
  return obj
}

const Address: Model<IAddressDTO> = model('Address', AddressSchema)

export { Address, AddressSchema }
