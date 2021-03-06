import Account from './account'
import Transaction from './transaction'
import Statement from './statement'
jest.mock('./transaction')
jest.mock('./statement')

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
      test('should have a Statement class', () => {
        expect(account.statement).toBeInstanceOf(Statement)
      })
    })
    describe('override defaults', () => {
      test('should have a specified Transaction class', () => {
        let mock = jest.fn()
        let account = new Account(mock)
        expect(account.transactionClass).toBe(mock)
      })
      test('should have a specified Statement class', () => {
        let mock = jest.fn()
        let account = new Account({}, mock)
        expect(account.statement).toBeInstanceOf(mock)
      })
    })
  })
  describe('credit', () => {
    let account
    describe('with transaction date', () => {
      const date = new Date('2018-10-07')
      beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Transaction.mockClear()
        account = new Account(Transaction)
        account.credit(50, date)
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
      test(`should use today's date and time for transaction`, () => {
        expect(Transaction).toHaveBeenCalledWith(50, date)
      })
    })
    describe('without transaction date', () => {
      const now = Date.now()
      beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Transaction.mockClear()
        account = new Account(Transaction)
        jest.spyOn(Date, 'now').mockImplementation(() => {
          return now
        })
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
      test(`should use today's date and time for transaction`, () => {
        expect(Transaction).toHaveBeenCalledWith(50, new Date(Date.now()))
      })
    })
  })
  describe('debit', () => {
    let account
    describe('with transaction date', () => {
      const date = new Date('2018-10-07')
      beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Transaction.mockClear()
        account = new Account(Transaction)
        account.credit(100, date)
        account.debit(25, date)
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
      test(`should use today's date and time for transaction`, () => {
        expect(Transaction).toHaveBeenCalledWith(-25, date)
      })
    })
    describe('without transaction date', () => {
      const now = Date.now()
      beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Transaction.mockClear()
        jest.spyOn(Date, 'now').mockImplementation(() => {
          return now
        })
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
      test(`should use today's date and time for transaction`, () => {
        expect(Transaction).toHaveBeenCalledWith(-25, new Date(Date.now()))
      })
    })
  })
  describe('printStatement', () => {
    test('should allow a statement to be printed', () => {
      Transaction.mockClear()
      Statement.mockClear()
      let account = new Account(Transaction, Statement)
      account.printStatement()
      expect(Statement.mock.instances[0].print).toHaveBeenCalledWith(
        account.transactions,
      )
    })
  })
})
