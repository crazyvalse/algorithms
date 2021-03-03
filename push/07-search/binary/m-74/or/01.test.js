const searchMatrix = require('./01')

test('1', () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
      ],
      3
    )
  ).toBe(true)
})

test('2', () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
      ],
      13
    )
  ).toBe(false)
})
