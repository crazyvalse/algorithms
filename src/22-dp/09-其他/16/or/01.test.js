const characterReplacement = require('./01')

test('1', () => {
  expect(characterReplacement('ABAB', 2)).toBe(4)
})

test('2', () => {
  expect(characterReplacement('AABABBA', 1)).toBe(4)
})
