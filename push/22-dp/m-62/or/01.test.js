const uniquePaths = require('./01')

test('1', () => {
  expect(uniquePaths(3, 7)).toEqual(28)
})

test('2', () => {
  expect(uniquePaths(3, 2)).toEqual(3)
})

test('3', () => {
  expect(uniquePaths(7, 3)).toEqual(28)
})

test('4', () => {
  expect(uniquePaths(3, 3)).toEqual(6)
})
