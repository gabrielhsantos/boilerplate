// import { AddressRepository } from '@core/domain/typeOrm/repositories/addressRepository'
import { AddressRepository } from '@core/domain/mongoose/repositories/addressRepository'
import { AddressService } from '@core/services/address'
import { Container } from 'typedi'
import { CreateAddressUseCase } from './createAddressUseCase'
import { RemoveAddressUseCase } from './removeAddressUseCase'
import { UpdateAddressUseCase } from './updateAddressUseCase'

const addressRepository = Container.get(AddressRepository)

const createAddressUseCase = new CreateAddressUseCase(addressRepository)
const createAddress = new AddressService(createAddressUseCase)

const removeAddressUseCase = new RemoveAddressUseCase(addressRepository)
const removeAddress = new AddressService(removeAddressUseCase)

const updateAddressUseCase = new UpdateAddressUseCase(addressRepository)
const updateAddress = new AddressService(updateAddressUseCase)

export { createAddress, removeAddress, updateAddress }
