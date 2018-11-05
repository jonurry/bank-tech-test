export default class Transaction {
  constructor(amount, date = Date.now()) {
    this.amount = amount
    this.date = date
  }
}
