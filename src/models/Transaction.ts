import { uuid } from 'uuidv4'

type constructorParameters = Omit<Transaction, 'id' | 'isIncome' | 'isOutcome'>

class Transaction {
  id: string

  title: string

  value: number

  type: 'income' | 'outcome'

  constructor({ title, value, type }: constructorParameters) {
    this.id = uuid()
    this.title = title
    this.value = value
    this.type = type
  }

  public isIncome(): boolean {
    return this.type === 'income'
  }

  public isOutcome(): boolean {
    return this.type === 'outcome'
  }
}

export default Transaction
