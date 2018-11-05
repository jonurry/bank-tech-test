import Account from './account'
describe('Account', () => {
  describe('constructor', () => {
    test('Account has a balance', () => {
      let account = new Account()
      expect(account.balance).toBe(0)
    })
  })
  describe('credit', () => {
    test('User can credit account with money', () => {
      let account = new Account()
      account.credit(50)
      expect(account.balance).toBe(50)
    })
  })
})
