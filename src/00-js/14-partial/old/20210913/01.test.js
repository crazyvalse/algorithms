const partial = require('./01')

test('测试 partial', () => {
  function add(a, b) {
    return a + b
  }

  const addOne = partial(add, 1)

  expect(addOne(2)).toBe(3)
})
