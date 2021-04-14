const { sort, heapify } = require('./01.js')
//Array(7) [9,
// 6,
// 6,
// 2,
// 3,
// 1,
// 4]
// test('1', () => {
//   expect(heapify([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
// })

test('1', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('2', () => {
  expect(sort([2])).toEqual([2])
})

test('3', () => {
  expect(sort([])).toEqual([])
})
