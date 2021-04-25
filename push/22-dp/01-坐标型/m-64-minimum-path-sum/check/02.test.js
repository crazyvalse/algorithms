const minPathSum = require('./02')

test('1', () => {
  expect(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ])
  ).toEqual(7)
})

test('2', () => {
  expect(
    minPathSum([
      [1, 2, 3],
      [4, 5, 6]
    ])
  ).toEqual(12)
})
