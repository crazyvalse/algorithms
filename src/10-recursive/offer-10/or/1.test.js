const fibonacci = require('./1')

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
test('fibonacci 1', () => {
  expect(fibonacci(5)).toBe(5)
})

test('fibonacci 2', () => {
  expect(fibonacci(6)).toBe(8)
})

test('fibonacci 3', () => {
  expect(fibonacci(7)).toBe(13)
})

test('fibonacci 4', () => {
  expect(fibonacci(45)).toBe(134903163)
})
