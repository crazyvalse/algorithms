const sort = require('./1-maopao-reverse.js')


test('冒泡排序 - 逆序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([9, 6, 6, 4, 3, 2, 1])
})

