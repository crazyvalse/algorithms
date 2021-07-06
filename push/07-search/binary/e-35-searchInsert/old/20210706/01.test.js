const search = require('./01')

test('1', () => {
  expect(search([1, 3, 5, 6], 5)).toBe(2)
})

test('2', () => {
  expect(search([1, 3, 5, 6], 2)).toBe(1)
})

test('3', () => {
  expect(search([1, 3, 5, 6], 7)).toBe(4)
})

test('4', () => {
  expect(search([1, 3, 5, 6], 0)).toBe(0)
})

test('5', () => {
  expect(search([1, 3, 4, 5, 6], 2)).toBe(1)
})
