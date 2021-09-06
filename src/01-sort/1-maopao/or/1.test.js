const sort = require('./1-maopao.js')

test('冒泡排序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('冒泡排序 - 逆序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6], true)).toEqual([9, 6, 6, 4, 3, 2, 1])
})

