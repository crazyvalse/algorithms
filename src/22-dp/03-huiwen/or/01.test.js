const longestPalindrome = require('./01.js')

test('1', () => {
  expect(longestPalindrome('babad')).toEqual('bab')
})

test('2', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb')
})
