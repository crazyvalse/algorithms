const fn = require('./01.js')

test('测试 bind - 2: 传参', () => {
  function Otaku(name, age) {
    this.name = name
    this.#age = age

    this.habit = 'Games'
  }

  // 因为缺乏锻炼的缘故，身体强度让人担忧
  Otaku.prototype.strength = 60

  Otaku.prototype.getName = function () {
    return 'I am ' + this.name
  }

  // var person = new Otaku('Kevin', '18')
  const person = fn(Otaku, 'Kevin', 18)
  // 1. 返回的person可以调用私有变量/方法
  // 2. 不同对象之间可以有公共方法

  expect(person.name).toEqual('Kevin')
  expect(person.habit).toEqual('Games')
  expect(person.strength).toBe(60)
  expect(person.getName()).toEqual('I am Kevin')
})
