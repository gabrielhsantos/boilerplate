import { KafkaConfig } from '@config/_index'
import { Container } from 'typedi'
import { errorLog, eventLog } from '@shared/utils/_index'

export class Producer {
  private kafka: KafkaConfig

  constructor() {
    this.kafka = Container.get(KafkaConfig)
  }

  async sendMessage(message: any, topic: string): Promise<Boolean> {
    let success = true

    try {
      await this.kafka.producer(message, topic)
      eventLog({ eventType: `SENT_${topic}`, msg: `${JSON.stringify(message)}` })
    } catch (error) {
      errorLog({ msg: 'Error on send message to kafka', error: { err: error, message, topic } })
      success = false
    }

    return success
  }
}
