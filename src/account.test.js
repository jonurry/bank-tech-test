import Account from './account'
describe('account', () => {
  describe('constructor', () => {
    describe('use defaults', () => {
      test('account has a balance', () => {
        let account = new Account()
        expect(account.balance).toBe(0)
      })
      test('account has no transactions', () => {
        let account = new Account()
        expect(account.transactions).toEqual([])
      })
    })
    describe('override defaults', () => {
      test('account has a set balance', () => {
        let account = new Account(100)
        expect(account.balance).toBe(100)
      })
      test('account has set transactions', () => {
        let transation = {date: Date.now(), amount: 20}
        let account = new Account(0, [transation])
        expect(account.transactions).toEqual([transation])
      })
    })
  })
  describe('credit', () => {
    test('user can credit account with money', () => {
      let account = new Account()
      account.credit(50)
      expect(account.balance).toBe(50)
    })
    // describe('with a date', () => {})
    // describe('without a date', () => {
    //   test(`transaction has today's date`, () => {
    //     let account = new Account()
    //     account.credit(50)
    //     expect(account.balance).toBe(50)
    //   })
    // })
  })
})
