import Transaction from '../models/Transaction'

interface Balance {
  income: number
  outcome: number
  total: number
}

class TransactionsRepository {
  private transactions: Transaction[]

  constructor() {
    this.transactions = []
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {
    const [income, outcome] = this.transactions.reduce(
      (accumulator: number[], transaction) => {
        accumulator[transaction.isIncome() ? 0 : 1] += transaction.value
        return accumulator
      },
      [0, 0],
    )

    return { income, outcome, total: income - outcome }
  }

  public create(transaction: Transaction): Transaction {
    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository
