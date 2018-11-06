import Transaction from './transaction'
import Statement from './statement'

export default class Account {
  constructor(transactionClass = Transaction, statementClass = Statement) {
    this.balance = 0
    this.transactions = []
    this.transactionClass = transactionClass
    this.statement = new statementClass()
  }
  credit(amount, date = Date.now()) {
    this.balance += amount
    let transaction = new this.transactionClass(amount, date)
    this.transactions.push(transaction)
  }
  debit(amount) {
    this.balance -= amount
    let transaction = new this.transactionClass(-amount)
    this.transactions.push(transaction)
  }
  printStatement() {
    this.statement.print(this.transactions)
  }
}
