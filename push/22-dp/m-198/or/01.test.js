const rob = require('./01')

test('1', () => {
  expect(rob([1, 2, 3, 1])).toBe(4)
})

test('2', () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12)
})
