import Transaction from './transaction'

export default class Account {
  constructor(balance = 0, transactionClass = Transaction) {
    this.balance = balance
    this.transactions = []
    this.transactionClass = transactionClass
  }
  credit(amount) {
    this.balance += amount
  }
  debit(amount) {
    this.balance -= amount
  }
}
