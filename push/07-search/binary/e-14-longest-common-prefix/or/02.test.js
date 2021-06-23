const longestCommanPrefix = require('./02')

test('1', () => {
  expect(longestCommanPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
})

test('2', () => {
  expect(longestCommanPrefix(['dog', 'racecar', 'car'])).toEqual('')
})

test('3', () => {
  expect(longestCommanPrefix(['dog'])).toEqual('dog')
})
