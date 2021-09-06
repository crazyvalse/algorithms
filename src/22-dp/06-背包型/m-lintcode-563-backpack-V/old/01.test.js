const backpack = require('./01')

test('1', () => {
  expect(backpack([1, 2, 3, 3, 7], 7)).toBe(2)
})

test('2', () => {
  expect(backpack([1, 1, 1, 1], 3)).toBe(4)
})
