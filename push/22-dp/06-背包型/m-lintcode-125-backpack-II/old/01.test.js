const backpack = require('./01')

test('1', () => {
  expect(backpack(10, [2, 3, 5, 7], [1, 5, 2, 4])).toBe(9)
})

test('2', () => {
  expect(backpack(10, [2, 3, 8], [2, 5, 8])).toBe(10)
})
