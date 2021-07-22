/**
 * 无论怎么 new 返回都是一个实例
 * @param name
 * @param age
 * @constructor
 */

function Person(name, age) {
  if (Person.instance) {
    return Person.instance
  }
  this.name = name
  this.age = age

  Person.instance = this
}

const a = new Person('zac', 12)

const b = new Person('Isaac', 13)

console.info(a, b, a === b, Person.instance === b)

console.info(Person.instance)
