const solution = require('./01')

test('1', () => {
  expect(solution('leetcode', ['leet', 'co', 'de'])).toEqual(true)
})

test('2', () => {
  expect(solution('leetcode', ['leet', 'cod', 'de'])).toEqual(false)
})

test('3', () => {
  expect(solution('leetcode', ['leet', 't', 'e', 'co', 'de'])).toEqual(true)
})

test('4', () => {
  expect(solution('leetcode', ['le', 't', 'e', 'co', 'de'])).toEqual(true)
})
