// Otaku 御宅族，简称宅
function Otaku(name, age) {
  this.name = name
  this.age = age

  this.habit = 'Games'
}

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name)
}

// var person = new Otaku('Kevin', '18')
//
// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60
// person.sayYourName() // I am Kevin

// 1. 初步实现能够使用私有变量
// 2. 实现公共 prototype
// 3. 返回值： a. 返回值是对象：返回对象；b. 返回值是基本类型: 返回obj
function ObjectFactory() {
  const obj = {}
  const fn = Array.prototype.shift.call(arguments)
  // 2. 实现公共 prototype
  obj.__proto__ = fn.prototype
  const result = fn.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

module.exports = ObjectFactory
