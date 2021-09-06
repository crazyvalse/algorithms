const maxProfit = require('./01.dp')

test('1', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
})

test('2', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4)
})

test('3', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7)
})
