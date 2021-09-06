const backpack = require('./01')

test('1', () => {
  expect(backpack([2, 3, 5, 7], [1, 5, 2, 4], 10)).toBe(15)
})

test('2', () => {
  expect(backpack([1, 2, 3], [1, 2, 3], 5)).toBe(5)
})
