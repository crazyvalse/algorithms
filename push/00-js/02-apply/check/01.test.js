require('./01.js')

test('测试 apply', () => {
  global.value = 2

  global.obj = {
    value: 1
  }

  function bar(name, age) {
    return {
      value: this.value,
      name: name,
      age: age
    }
  }

  expect(bar.myApply(null)).toEqual({ age: undefined, name: undefined, value: 2 })
})

test('测试 apply 2', () => {
  global.value = 2

  global.obj = {
    value: 1
  }

  function bar(name, age) {
    return {
      value: this.value,
      name: name,
      age: age
    }
  }

  expect(bar.myApply(null, ['isaac', 12])).toEqual({ age: 12, name: 'isaac', value: 2 })
})
