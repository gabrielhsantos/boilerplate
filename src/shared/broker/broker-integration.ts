import { Container, Service } from 'typedi'
import { env, KafkaConfig } from '@config/_index'
import { consumer } from '.'
import { infoLog } from '@shared/utils/loggerFormat'
import { IKafkaConsumer } from '@shared/interfaces/config/IBroker'

@Service()
export class KafkaConnect {
  private config: KafkaConfig

  constructor() {
    this.config = Container.get(KafkaConfig)
  }

  async connectBroker() {
    infoLog({ msg: 'Connecting on kafka' })

    const group = env.kafka.consumer.group
    const topic = env.kafka.consumer.topic

    const consumers: IKafkaConsumer[] = [
      {
        groupId: group.group,
        topic: topic.consumer,
        handler: consumer,
      },
    ]
    await this.config.connectConsumers(consumers)
    await this.config.connectProducer()
  }
}
