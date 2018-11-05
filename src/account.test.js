import Account from './account'
import Transaction from './transaction'
jest.mock('./transaction')

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
      test('account has a specific transaction maker', () => {
        let mock = jest.fn()
        let account = new Account(mock)
        expect(account.transactionClass).toBe(mock)
      })
    })
  })
  describe('credit', () => {
    let account
    beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      Transaction.mockClear()
      account = new Account(Transaction)
      account.credit(50)
    })
    test('should credit account with money', () => {
      expect(account.balance).toBe(50)
    })
    test('should create a transaction', () => {
      expect(Transaction).toHaveBeenCalledTimes(1)
    })
    test('should store one item in transactions[]', () => {
      expect(account.transactions).toHaveLength(1)
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
      let mock = jest.fn()
      let account = new Account(mock)
      account.debit(50)
      expect(account.balance).toBe(-50)
    })
  })
})
