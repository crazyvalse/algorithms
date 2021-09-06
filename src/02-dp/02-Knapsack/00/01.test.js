const find = require('./01')

test('递归测试', () => {
  expect(find([1, 1, 1, 1, 1], 3)).toBe(5)
})
