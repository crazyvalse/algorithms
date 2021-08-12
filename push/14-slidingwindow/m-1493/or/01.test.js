const longestSubarray = require('./01')

test('1', () => {
  expect(longestSubarray([1, 1, 0, 1])).toBe(3)
})

test('2', () => {
  expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5)
})

test('3', () => {
  expect(longestSubarray([1, 1, 1], 2)).toBe(2)
})

test('4', () => {
  expect(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])).toBe(4)
})

test('5', () => {
  expect(longestSubarray([0, 0, 0])).toBe(0)
})
