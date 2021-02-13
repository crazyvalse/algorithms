const merge = require('./01')

test('排序 1', () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18]
  ])
})

test('排序 2', () => {
  expect(
    merge([
      [1, 4],
      [4, 5]
    ])
  ).toEqual([[1, 5]])
})
