const reverse = require('./01.js')

test('测试 reverse', () => {
  const array = [1, 2, 3, 4, 5]
  expect(reverse(array)).toEqual([ 5, 4, 3, 2, 1 ])
})
