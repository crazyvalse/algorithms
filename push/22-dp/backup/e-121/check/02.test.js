const maxProfit = require('./02')

test('1 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('2 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
