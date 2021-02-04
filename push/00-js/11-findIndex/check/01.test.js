const findIndex = require('./01.js')

test('测试 findIndex', () => {
  expect(findIndex([1, 2, 3, 4], function (item) {
    return item === 3
  })).toBe(2)
})
