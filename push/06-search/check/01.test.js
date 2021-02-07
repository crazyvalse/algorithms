const search = require('./01.js')

test('顺序查找', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe(2)
})

test('顺序查找 找不到', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 134)).toBe(-1)
})
