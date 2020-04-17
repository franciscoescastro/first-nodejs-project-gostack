import TransactionsRepository from '../repositories/TransactionsRepository'
import Transaction from '../models/Transaction'

type requestCreateTransactionService = Omit<
  Transaction,
  'id' | 'isIncome' | 'isOutcome'
>

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository
  }

  public execute(request: requestCreateTransactionService): Transaction {
    const transaction = new Transaction(request)

    if (request.value <= 0) {
      throw Error('Value cannot be lower or equal to 0.')
    }

    if (transaction.isOutcome()) {
      const { total } = this.transactionsRepository.getBalance()
      if (total < transaction.value)
        throw Error('Outcome cannot be bigger than total.')
    }

    this.transactionsRepository.create(transaction)

    return transaction
  }
}

export default CreateTransactionService
