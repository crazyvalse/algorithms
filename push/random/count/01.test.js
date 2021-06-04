const sum = require('./01')

test('1', () => {
  expect(sum([1, 3, 5], 9)).toBe(3)
})

test('2', () => {
  expect(sum([1, 3, 5], 12)).toBe(4)
})
