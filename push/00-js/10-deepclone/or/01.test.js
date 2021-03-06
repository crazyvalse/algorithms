const deepClone = require('./01.js')

test('测试 deepClone', () => {
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
})

test('2', () => {
  const obj = {
    a: 1,
    b: 2,
    c: undefined,
    d: null,
    e: Symbol('e'),
    f: function () {},
    g: obj
  }
  const obj2 = deepClone(obj)
  expect(obj2).toEqual({
    a: 1,
    b: 2,
    c: undefined,
    d: null,
    e: Symbol('e'),
    f: function () {},
    g: obj
  })
})
