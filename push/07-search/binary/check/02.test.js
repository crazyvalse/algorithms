const search = require('./02')

test('1', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe(2)
})

test('2', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 134)).toBe(-1)
})

test('3', () => {
  expect(search([1], 134)).toBe(-1)
})

test('4', () => {
  expect(search([1], 1)).toBe(0)
})

test('5', () => {
  expect(search([1, 2], 1)).toBe(0)
})

test('6', () => {
  expect(search([1, 2], 2)).toBe(1)
})

test('7', () => {
  expect(search([1, 2, 3], 2)).toBe(1)
})

test('8', () => {
  expect(search([1, 2, 3], 3)).toBe(2)
})

test('9', () => {
  expect(search([1, 2, 2, 4, 5, 6, 7, 8], 3)).toBe(-1)
})
