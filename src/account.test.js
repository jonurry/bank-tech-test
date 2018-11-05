import Account from './account'
import Transaction from './transaction'

describe('account', () => {
  describe('constructor', () => {
    describe('use defaults', () => {
      let account
      beforeEach(() => {
        account = new Account()
      })
      test('account has a balance', () => {
        expect(account.balance).toBe(0)
      })
      test('account has no transactions', () => {
        expect(account.transactions).toEqual([])
      })
      test('account has default transaction maker', () => {
        expect(account.transactionClass).toEqual(Transaction)
      })
    })
    describe('override defaults', () => {
      test('account has a set balance', () => {
        let account = new Account(100)
        expect(account.balance).toBe(100)
      })
      // test('account has set transactions', () => {
      //   let transation = {date: Date.now(), amount: 20}
      //   let account = new Account(0, [transation])
      //   expect(account.transactions).toEqual([transation])
      // })
      test('account has a specific transaction maker', () => {
        let mock = jest.fn()
        let account = new Account(100, mock)
        expect(account.transactionClass).toBe(mock)
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
  describe('debit', () => {
    test('user can debit money from an account', () => {
      let account = new Account(100)
      account.debit(50)
      expect(account.balance).toBe(50)
    })
  })
})
