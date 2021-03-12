const subsets = require('./1')

test('1', () => {
  expect(subsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
})

test('2', () => {
  expect(subsets([1])).toEqual([[], [1]])
})
