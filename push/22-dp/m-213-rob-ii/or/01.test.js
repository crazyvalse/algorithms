const rob = require('./01')

test('1', () => {
  expect(rob([2, 3, 2])).toBe(3)
})

test('2', () => {
  expect(rob([1, 2, 3, 1])).toBe(4)
})

test('3', () => {
  expect(rob([0])).toBe(0)
})

test('4', () => {
  expect(rob([])).toBe(0)
})

test('5', () => {
  expect(rob([1])).toBe(1)
})
