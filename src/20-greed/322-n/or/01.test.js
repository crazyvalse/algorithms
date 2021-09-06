const coinChange = require('./01')

test('1', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3)
})

test('2', () => {
  expect(coinChange([2, 4], 13)).toEqual(-1)
})

test('3', () => {
  expect(coinChange([1], 0)).toEqual(0)
})

test('4', () => {
  expect(coinChange([1], 1)).toEqual(1)
})

test('5', () => {
  expect(coinChange([1], 2)).toEqual(2)
})

test('6', () => {
  expect(coinChange([1, 2, 5], 13)).toEqual(4)
})

test('7', () => {
  expect(coinChange([186, 419, 83, 408], 6249)).toEqual(20)
})
