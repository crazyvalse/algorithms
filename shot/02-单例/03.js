/**
 * 1. 提供一个方法，每次我调用这个方法的时候，返回同一个实例
 * 2. new 仍然创建新的对象
 * @param name
 * @param age
 * @constructor
 */
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.getInstance = function (...args) {
  if (!Person.instance) {
    Person.instance = new Person(...args)
  }
  return Person.instance
}

const a = Person.getInstance('zac', 12)
const b = Person.getInstance('Isaac', 13)

console.info(a, b, a === b)
