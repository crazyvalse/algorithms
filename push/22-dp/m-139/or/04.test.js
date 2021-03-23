const wordBreak = require('./04')

test('1', () => {
  expect(wordBreak('leetcode', ['leet', 'code'])).toEqual(true)
})

test('2', () => {
  expect(wordBreak('applepenapple', ['apple', 'pen'])).toEqual(true)
})

test('3', () => {
  expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual(false)
})
