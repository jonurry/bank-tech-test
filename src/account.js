import Transaction from './transaction'
import Statement from './statement'

export default class Account {
  constructor(transactionClass = Transaction, statementClass = Statement) {
    this.balance = 0
    this.transactions = []
    this.transactionClass = transactionClass
    this.statementClass = statementClass
  }
  credit(amount) {
    this.balance += amount
    let transaction = new this.transactionClass(amount)
    this.transactions.push(transaction)
  }
  debit(amount) {
    this.balance -= amount
    let transaction = new this.transactionClass(-amount)
    this.transactions.push(transaction)
  }
}
