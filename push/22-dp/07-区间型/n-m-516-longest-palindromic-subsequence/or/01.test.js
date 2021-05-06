const longestPalindromeSubseq = require('./01.js')

test('1', () => {
  expect(longestPalindromeSubseq('bbbab')).toBe(4)
})

test('2', () => {
  expect(longestPalindromeSubseq('cbbd')).toBe(2)
})
