const mySqrt = require('./01')

test('1', () => {
  expect(mySqrt(4)).toBe(2)
})

test('2', () => {
  expect(mySqrt(8)).toBe(2)
})
