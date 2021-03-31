const mySqrt = require('./02')

test('1', () => {
  expect(mySqrt(4)).toBe(2)
})

test('2', () => {
  expect(mySqrt(8)).toBe(2)
})

test('3', () => {
  expect(mySqrt(1)).toBe(1)
})
