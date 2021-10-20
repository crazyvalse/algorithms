const { sort, heapify } = require('./01.js')
test('h1', () => {
  const array = [4, 6, 8, 5, 9]
  heapify(array, 1, 5)
  console.info(array)
  expect(array).toEqual([9, 6, 8, 5, 4])
})

test('1', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('2', () => {
  expect(sort([2])).toEqual([2])
})

test('3', () => {
  expect(sort([])).toEqual([])
})
