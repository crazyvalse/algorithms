const tribonacci = require('./1')

test('1', () => {
  expect(tribonacci(0)).toBe(0)
})

test('2', () => {
  expect(tribonacci(1)).toBe(1)
})

test('3', () => {
  expect(tribonacci(2)).toBe(1)
})

test('4', () => {
  expect(tribonacci(3)).toBe(2)
})

test('5', () => {
  expect(tribonacci(4)).toBe(4)
})

test('6', () => {
  expect(tribonacci(25)).toBe(1389537)
})
