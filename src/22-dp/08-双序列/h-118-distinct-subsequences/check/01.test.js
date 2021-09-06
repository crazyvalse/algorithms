const numDistinct = require('./01')

test('1', () => {
  expect(numDistinct('rabbbit', 'rabbit')).toBe(3)
})

test('2', () => {
  expect(numDistinct('babgbag', 'bag')).toBe(5)
})
