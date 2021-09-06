const solution = require('./01')

test('1', () => {
  expect(solution('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])).toEqual(['cat sand dog', 'cats and dog'])
})

test('2', () => {
  expect(solution('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple'])).toEqual([
    'pine apple pen apple',
    'pine applepen apple',
    'pineapple pen apple'
  ])
})

test('3', () => {
  expect(solution('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual([])
})
