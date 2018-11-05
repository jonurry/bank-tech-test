export default class Account {
  constructor() {
    this.balance = 0
  }
  credit(amount) {
    this.balance += amount
  }
}
