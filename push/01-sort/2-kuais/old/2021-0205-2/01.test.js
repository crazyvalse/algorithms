const { sortAndFindPivot, sort } = require('./01.js')

test('sortAndFindPivot', () => {
  const array = [2, 3, 4, 6, 9, 1, 6]
  const pivot = sortAndFindPivot(array, 0, array.length - 1)
  expect(pivot).toBe(1)
  expect(array).toEqual([1, 2, 4, 6, 9, 3, 6])
})

test('快速排序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})
