const maxSubArray = require('./03')

test('1 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test('2 0', () => {
  expect(maxSubArray([1])).toBe(1)
})

test('3 1', () => {
  expect(maxSubArray([-2, 1])).toBe(1)
})

test('4 7', () => {
  expect(maxSubArray([-5, -3, -2, 1, 2, 4])).toBe(7)
})

test('4 5', () => {
  expect(maxSubArray([-5, 1, -3, 2, -1, 4])).toBe(5)
})
