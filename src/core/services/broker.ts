import { IConsumerMessage } from '@shared/interfaces/_index'
import { dataLog } from '@shared/utils/loggerFormat'
import { Service } from 'typedi'

@Service()
export class BrokerService {
  constructor() {}

  async consumeMessage(message: IConsumerMessage): Promise<void> {
    dataLog({ msg: 'Broker Message', data: message })
  }
}
