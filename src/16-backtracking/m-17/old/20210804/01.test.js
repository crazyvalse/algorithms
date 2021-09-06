const letterCombinations = require('./01')

test('1', () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('2', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})

test('4', () => {
  expect(letterCombinations('')).toEqual([])
})
