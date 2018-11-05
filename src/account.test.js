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
      test('should have a balance of zero', () => {
        expect(account.balance).toBe(0)
      })
      test('should have no transactions', () => {
        expect(account.transactions).toEqual([])
      })
      test('should have a Transaction class', () => {
        expect(account.transactionClass).toEqual(Transaction)
      })
    })
    describe('override defaults', () => {
      test('should have a specified Transaction class', () => {
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
  })
  describe('debit', () => {
    let account
    beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      Transaction.mockClear()
      account = new Account(Transaction)
      account.credit(100)
      account.debit(25)
    })
    test('should debit money from an account', () => {
      expect(account.balance).toBe(75)
    })
    test('should create a transaction', () => {
      expect(Transaction).toHaveBeenCalledTimes(2)
    })
    test('should store one item in transactions[]', () => {
      expect(account.transactions).toHaveLength(2)
    })
  })
})
