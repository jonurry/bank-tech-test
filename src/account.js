import Transaction from './transaction.js'
import Statement from './statement.js'

export default class Account {
  constructor(transactionClass = Transaction, statementClass = Statement) {
    this.balance = 0
    this.transactions = []
    this.transactionClass = transactionClass
    this.statement = new statementClass()
  }
  credit(amount, date = new Date(Date.now())) {
    this.balance += amount
    let transaction = new this.transactionClass(amount, date)
    this.transactions.push(transaction)
  }
  debit(amount, date = new Date(Date.now())) {
    this.balance -= amount
    let transaction = new this.transactionClass(-amount, date)
    this.transactions.push(transaction)
  }
  printStatement() {
    return this.statement.print(this.transactions)
  }
}
