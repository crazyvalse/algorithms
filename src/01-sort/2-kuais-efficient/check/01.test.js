const { sortAndFindPivot, sort } = require('./01.js')

test('sortAndFindPivot', () => {
  const array = [2, 3, 4, 6, 9, 1, 6]
  const pivot = sortAndFindPivot(array, 0, array.length - 1)
  expect(pivot).toBe(2)
  expect(array).toEqual([1, 2, 4, 6, 9, 3, 6])
})

test('快速排序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6, 6])).toEqual([1, 2, 3, 4, 6, 6, 6, 9])
})

test('快速排序 2', () => {
  expect(sort([1])).toEqual([1])
})

test('快速排序 3', () => {
  expect(sort([2, -1])).toEqual([-1, 2])
})

test('快速排序 4', () => {
  expect(sort([-1, 0])).toEqual([-1, 0])
})

test('快速排序 5', () => {
  expect(sort([1, 2, 3])).toEqual([1, 2, 3])
})
