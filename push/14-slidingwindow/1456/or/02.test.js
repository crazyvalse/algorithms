const maxVowels = require('./02')

test('1', () => {
  expect(maxVowels('abciiidef', 3)).toBe(3)
})

test('2', () => {
  expect(maxVowels('aeiou', 2)).toBe(2)
})

test('3', () => {
  expect(maxVowels('leetcode', 3)).toBe(2)
})

test('4', () => {
  expect(maxVowels('rhythms', 4)).toBe(0)
})

test('5', () => {
  expect(maxVowels('tryhard', 4)).toBe(1)
})

test('6', () => {
  expect(maxVowels('ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33)).toBe(7)
})
