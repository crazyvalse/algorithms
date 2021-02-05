const memorize = require('./01.js')

test('测试 memorize', () => {
  const add = function (a, b, c) {
    return a + b + c
  }
  const memorizedAdd = memorize(add)
  expect(memorizedAdd(1, 2, 3)).toBe(6)
  expect(Object.keys(memorizedAdd.cache).length).toBe(1)
})
