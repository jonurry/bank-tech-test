import Statement from './statement'

describe('statement', () => {
  describe('print', () => {
    test('should output transactions', () => {
      let statement = new Statement()
      let transactions = [
        {
          amount: 1000,
          date: new Date('2012/01/10'),
        },
        {
          amount: 2000,
          date: new Date('2012/01/13'),
        },
        {
          amount: -500,
          date: new Date('2012/01/14'),
        },
      ]
      expect(statement.print(transactions)).toEqual(
        `date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00`,
      )
    })
  })
})
