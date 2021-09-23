const deepClone = require('./01.js')

test('测试 1', () => {
  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 3
    }
  }

  const obj2 = deepClone(obj)

  expect(obj2).toEqual({
    a: 1,
    b: 2,
    c: {
      d: 3
    }
  })

  obj2.c = 4

  expect(obj2).toEqual({
    a: 1,
    b: 2,
    c: 4
  })

  expect(obj).toEqual({
    a: 1,
    b: 2,
    c: {
      d: 3
    }
  })

  expect(1).toEqual(1)
})
