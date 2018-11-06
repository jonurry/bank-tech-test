export default class Transaction {
  constructor(amount, date = new Date(Date.now())) {
    this.amount = amount
    this.date = date
  }
}
