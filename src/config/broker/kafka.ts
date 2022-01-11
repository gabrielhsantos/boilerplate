import { Kafka, logLevel, CompressionTypes, Producer, RecordMetadata } from 'kafkajs'
import { IKafkaConfig, IKafkaConsumer } from '@shared/interfaces/config/IBroker'
import { eventLog, errorLog, infoLog } from '@shared/utils/_index'
import { env } from '@config/_index'
import { Service } from 'typedi'

const kafkaConfig: IKafkaConfig = {
  clientId: env.kafka.config.clientId,
  brokers: env.kafka.config.brokers,
  logLevel: env.kafka.config.log ? logLevel.INFO : logLevel.WARN,
}

@Service()
export class KafkaConfig {
  private kafka: Kafka
  private kafkaProducer: Producer

  constructor() {
    this.kafka = new Kafka(kafkaConfig)
    this.kafkaProducer = this.kafka.producer()

    this.kafkaProducer.on('producer.disconnect', async e => {
      try {
        await this.kafkaProducer.connect()
      } catch (error) {
        errorLog({ msg: 'Error while connection kafka', error })
        process.exit(1)
      }
    })
  }

  async producer(message: object, topic: string): Promise<RecordMetadata[]> {
    const producerConfig = {
      topic: topic,
      compression: CompressionTypes.GZIP,
      messages: [{ value: JSON.stringify(message) }],
    }

    return await this.kafkaProducer.send(producerConfig)
  }

  async connectConsumers(consumers: IKafkaConsumer[]) {
    for (const consumer of consumers) {
      const newConsumer = this.kafka.consumer({ groupId: consumer.groupId })

      await newConsumer.subscribe({ topic: consumer.topic, fromBeginning: false })

      infoLog({ msg: `Consumer ${consumer.topic} successfully connected` })

      await newConsumer.run({
        eachMessage: async event => {
          const { message, topic } = event

          if (!message.value) return
          eventLog({ eventType: `RECEIVED_${topic}`, msg: `${message.value}` })

          await consumer.handler(message).catch(error => {
            errorLog({ msg: `Error on process message, topic: ${topic} / message: ${message.value}`, error })
          })
        },
      })

      newConsumer.on('consumer.disconnect', () => {
        newConsumer.connect().catch(error => {
          errorLog({ msg: `Cannot connect to consumer ${consumer.topic} restarting...`, error })
          process.exit(1)
        })
      })
    }
  }

  async connectProducer() {
    await this.kafkaProducer.connect()
    infoLog({ msg: 'Producer is connected!' })
  }
}
