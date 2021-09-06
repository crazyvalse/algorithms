const uniquePathsWithObstacles = require('./02')

test('1', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 1],
      [0, 0]
    ])
  ).toEqual(1)
})

test('2', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])
  ).toEqual(2)
})

test('3', () => {
  expect(uniquePathsWithObstacles([[0, 0]])).toEqual(1)
})
