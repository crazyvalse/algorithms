const longestCommonPrefix = require('./01')

test('1', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
})

test('2', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
})

test('3', () => {
  expect(longestCommonPrefix(['dog'])).toEqual('dog')
})
