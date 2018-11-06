export default class Statement {
  constructor() {}
  print(transactions) {
    let statement = []
    let balance = 0
    let sortedTransactions = transactions.sort((a, b) => {
      if (a.date < b.date) return -1
      if (a.date > b.date) return 1
      return 0
    })
    sortedTransactions.forEach(transaction => {
      let credit = ' '
      let debit = ' '
      date = transaction.date
      let date = `${date.getDate()}/${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}/${date.getFullYear()}`
      transaction.amount >= 0
        ? (credit = ` ${transaction.amount.toFixed(2)} `)
        : (debit = ` ${(-transaction.amount).toFixed(2)} `)
      balance += transaction.amount
      statement.push(`\n${date} ||${credit}||${debit}|| ${balance.toFixed(2)}`)
    })
    statement.push('date || credit || debit || balance')
    return statement.reverse().join('')
  }
}
