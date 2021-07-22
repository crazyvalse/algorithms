const extend = require('./01.js')

test('测试 bind - 2: 传参', () => {
  function Parent(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  }

  Parent.prototype.getName = function () {
    return this.name
  }

  function Child(name, age) {
    Parent.call(this, name)
    this.#age = age
  }

  extend(Child, Parent)

  const child = new Child('zac', 10)

  expect(child.getName()).toEqual('zac')
  expect(child.age).toBe(10)
})
