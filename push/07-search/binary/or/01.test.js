const search = require('./01')

test('二分法', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe(2)
})

test('二分法3', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 134)).toBe(-1)
})
