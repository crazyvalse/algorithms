const backpack = require('./01')

test('1', () => {
  expect(backpack([2, 3, 6, 7], 7)).toBe(2)
})

test('2', () => {
  expect(backpack([2, 3, 4, 5], 7)).toBe(3)
})
