const largestRectangleArea = require('./01')

test('1', () => {
  expect(largestRectangleArea([2, 2, 1, 5, 6, 2, 3])).toBe(10)
})

test('2', () => {
  expect(largestRectangleArea([1, 1])).toBe(2)
})

test('3', () => {
  expect(largestRectangleArea([2, 1, 2])).toBe(3)
})
