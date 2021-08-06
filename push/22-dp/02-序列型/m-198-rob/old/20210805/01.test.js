const rob = require('./01')

test('1', () => {
  expect(rob([1, 2, 3, 1])).toBe(4)
})

test('2', () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12)
})

test('3', () => {
  expect(rob([2])).toBe(2)
})

test('4', () => {
  expect(rob([2, 4])).toBe(4)
})
