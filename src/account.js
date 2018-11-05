import Transaction from './transaction'

export default class Account {
  constructor(transactionClass = Transaction) {
    this.balance = 0
    this.transactions = []
    this.transactionClass = transactionClass
  }
  credit(amount) {
    this.balance += amount
    let transaction = new this.transactionClass(amount)
    this.transactions.push(transaction)
  }
  debit(amount) {
    this.balance -= amount
  }
}
