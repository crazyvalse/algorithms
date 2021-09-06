const longestCommonSubsequence = require('./01')

test('1', () => {
  expect(longestCommonSubsequence('abcde', 'ace')).toBe(3)
})

test('2', () => {
  expect(longestCommonSubsequence('abc', 'abc')).toBe(3)
})

test('3', () => {
  expect(longestCommonSubsequence('abc', 'def')).toBe(0)
})
