/**
 * 1. 提供一个方法，每次我调用这个方法的时候，返回同一个实例
 * 2. new 仍然创建新的对象
 * @param name
 * @param age
 * @constructor
 */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getDetails() {
    console.info(this.name, this.age)
  }

  // Person.getInstance
  static getInstance(...args) {
    const instance = new Person(...args)

    Person.getInstance = function () {
      return instance
    }
    return Person.getInstance()
  }
}

// console.info(Object.getOwnPropertyNames(Person.prototype))

// constructor
// const a = Person.getInstance('zac', 12)
// const b = Person.getInstance('Isaac', 13)
//
// console.info(a, b, a === b)
//
// console.info(Person.getInstance.toString())
