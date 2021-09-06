const findAnagrams = require('./01')

test('1', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
})

test('2', () => {
  expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
})
