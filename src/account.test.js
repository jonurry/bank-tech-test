import Account from './account'
test('Account has a balance', () => {
  let account = new Account()
  console.log(account)
  expect(account.balance).toBe(0)
})
