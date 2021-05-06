const isInterleave = require('./01')

test('1', () => {
  expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true)
})

test('2', () => {
  expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toEqual(false)
})

test('3', () => {
  expect(isInterleave('', '', '')).toEqual(true)
})

test('4', () => {
  expect(isInterleave('ab', 'bc', 'babc')).toEqual(true)
})
