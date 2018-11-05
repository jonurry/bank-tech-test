import Transaction from './transaction'

describe('transaction', () => {
  describe('constructor', () => {
    test('without a date', () => {
      const now = Date.now()
      jest.spyOn(Date, 'now').mockImplementation(() => {
        return now
      })
      let trans = new Transaction(10)
      expect(trans).toEqual({amount: 10, date: now})
    })
    test('with a date', () => {
      const date = Date('10/01/2012')
      let trans = new Transaction(20, date)
      expect(trans).toEqual({amount: 20, date: date})
    })
  })
})
