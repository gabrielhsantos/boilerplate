import { BrokerService } from '@core/services/broker'
import { Container } from 'typedi'
import { KafkaMessage } from 'kafkajs'
import { IConsumerMessage } from '@shared/interfaces/_index'

const brokerService = Container.get(BrokerService)

export const consumer = async (message: KafkaMessage) => {
  const event = JSON.parse(message.value!.toString()) as IConsumerMessage
  await brokerService.consumeMessage(event)
}
