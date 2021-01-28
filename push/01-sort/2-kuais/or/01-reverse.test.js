const sort = require('./01-reverse.js')

test('快速排序', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([9, 6, 6, 4, 3, 2, 1])
})
