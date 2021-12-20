import { Schema, model, Model } from 'mongoose'
import { IItemDTO } from '@shared/interfaces/_index'

const ItemSchema: Schema = new Schema(
  {
    referenceId: { type: Number, required: true },
    name: { type: String, required: true },
    realatedId: { type: Number, required: false },
  },
  {
    timestamps: true,
    collection: 'items',
  },
)

ItemSchema.methods.toJSON = function castToJSON() {
  const obj = this.toObject()
  obj.id = obj._id
  delete obj._id
  delete obj.__v
  return obj
}

const Items: Model<IItemDTO> = model('Items', ItemSchema)

export { Items, ItemSchema }
