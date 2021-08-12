const longestSubarray = require('./01')

test('1', () => {
  expect(longestSubarray('abcabcbb')).toBe(3)
})

test('2', () => {
  expect(longestSubarray('bbbbb')).toBe(1)
})

test('3', () => {
  expect(longestSubarray('pwwkew')).toBe(3)
})

test('4', () => {
  expect(longestSubarray('')).toBe(0)
})

test('5', () => {
  expect(longestSubarray('pwwkewb')).toBe(4)
})
