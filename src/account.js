export default class Account {
  constructor(balance = 0, transactions = []) {
    this.balance = balance
    this.transactions = transactions
  }
  credit(amount) {
    this.balance += amount
  }
}
