const backpack = require('./01')

test('1', () => {
  expect(backpack(10, [3, 4, 8, 5])).toBe(9)
})

test('2', () => {
  expect(backpack(12, [2, 3, 5, 7])).toBe(12)
})

test('3', () => {
  expect(backpack(3, [3, 4, 8, 5])).toBe(3)
})
