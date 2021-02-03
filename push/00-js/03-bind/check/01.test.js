require('./01.js')

test('测试 bind - 2: 传参', () => {
  var foo = {
    value: 1
  }

  function Bar(name, age) {
    return {
      value: this.value,
      name,
      age
    }
  }

  const bar = Bar.myBind(foo, 'daisy')
  expect(bar(18)).toEqual({ age: 18, name: 'daisy', value: 1 })
  // expect(bar.bind(foo, 'daisy')(18)).toEqual({ age: 18, name: 'daisy', value: 1 })
})

test('测试 bind - 3: 传参', () => {
  var foo = {
    value: 1
  }

  function Bar(name, age) {
    this.habit = 'shopping'
    this.name = name
    this.age = age
  }

  Bar.prototype.friend = 'kevin'

  var bindFoo = Bar.myBind(foo, 'daisy')

  var obj = new bindFoo(18)

  expect(obj.age).toBe(18)
  expect(obj.habit).toEqual('shopping')
  expect(obj.friend).toEqual('kevin')
})
