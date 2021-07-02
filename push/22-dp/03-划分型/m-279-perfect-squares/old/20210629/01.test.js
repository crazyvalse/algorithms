const numSquares = require('./01')

test('1', () => {
  expect(numSquares(12)).toEqual(3)
})

test('2', () => {
  expect(numSquares(13)).toEqual(2)
})
