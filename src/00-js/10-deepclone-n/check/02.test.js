const deepClone = require('./02.js')

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

  expect(1).toEqual(1)
})

test('2 undefined symbol function', () => {
  const sm = Symbol('deepClone')
  const f = function () {}
  const date = new Date()
  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 3
    },
    e: [1, 2, 3],
    f: undefined,
    g: null,
    h: sm,
    i: f,
    j: date,
    [sm]: 123
  }

  const result = deepClone(obj)

  expect(result).toEqual({
    a: 1,
    b: 2,
    c: {
      d: 3
    },
    e: [1, 2, 3],
    f: undefined,
    g: null,
    h: sm,
    i: f,
    j: date,
    [sm]: 123
  })
})

test('3 循环引用', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  }

  obj.a = obj.b
  obj.b.c = obj.a

  const result = deepClone(obj)
  expect(result.a.c.d).toEqual(3)
  // expect(result.b.c).toEqual(result.a)
})
