const maxSubArray = require('./01')

test('1 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test('2 0', () => {
  expect(maxSubArray([1])).toBe(1)
})

test('3 1', () => {
  expect(maxSubArray([-2, 1])).toBe(1)
})
