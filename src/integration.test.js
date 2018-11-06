import Account from './account'

describe('Integration Tests', () => {
  describe('User should be able to', () => {
    test('Add tranasctions and print statement', () => {
      let account = new Account()
      account.credit(1000, new Date('2012-01-10'))
      account.credit(2000, new Date('2012-01-13'))
      account.debit(500, new Date('2012-01-14'))
      expect(account.balance).toEqual(2500)
      expect(account.printStatement()).toEqual(
        `date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00`,
      )
    })
  })
})
