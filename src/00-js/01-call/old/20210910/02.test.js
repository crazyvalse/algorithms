require('./02.js')

test('测试 call', () => {
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

  expect(bar.myCall(null)).toEqual({ age: undefined, name: undefined, value: 2 })
})
