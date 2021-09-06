@Singleton
class Person {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.info('name: ' + this.name)
  }
}

function Singleton(target) {
  const constructor = target.prototype.constructor
  console.info(constructor === target)
  return target
}

console.info(Person.prototype.constructor.toString())

const a = new Person('a')
const b = new Person('b')
const c = new Person('c')
a.sayName()
b.sayName()
c.sayName()
