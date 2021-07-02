const removeElement = require('./01')

test('1', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
})

test('2', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
})

test('3', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 6)).toBe(8)
})

test('4', () => {
  expect(removeElement([0, 0, 0, 0], 0)).toBe(0)
})
