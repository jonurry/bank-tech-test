export default class Statement {
  constructor() {}
  print(transactions) {
    let statement = []
    let balance = 0
    sortTransactionsByDate(transactions).forEach(transaction => {
      let credit = formatCredit(transaction.amount)
      let debit = formatDebit(transaction.amount)
      let date = formatDate(transaction.date)
      balance += transaction.amount
      statement.unshift(
        `\n${date} ||${credit}||${debit}|| ${formatBalance(balance)}`,
      )
    })
    statement.unshift('date || credit || debit || balance')
    return statement.join('')
  }
}

const formatBalance = balance => {
  return balance.toFixed(2)
}

const formatCredit = amount => {
  return amount >= 0 ? ` ${amount.toFixed(2)} ` : ' '
}

const formatDebit = amount => {
  return amount < 0 ? ` ${(-amount).toFixed(2)} ` : ' '
}

const formatDate = date => {
  return `${date.getDate()}/${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}/${date.getFullYear()}`
}

const sortTransactionsByDate = transactions => {
  let sortedTransactions = transactions.sort((a, b) => {
    if (a.date < b.date) return -1
    if (a.date > b.date) return 1
    return 0
  })
  return sortedTransactions
}
