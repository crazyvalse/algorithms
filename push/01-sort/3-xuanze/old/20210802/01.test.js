const sort = require('./01.js')

test('选择排序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})
