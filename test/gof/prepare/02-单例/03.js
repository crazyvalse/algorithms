function Person(name, age) {
  this.name = name
  this.age = age
}

Person.getInstance = function (...args) {
  if (Person.instance) {
    return Person.instance
  }
  Person.instance = new Person(...args)
  Object.freeze(Person)
  return Person.instance
}

// 即可以拿到相同的 又可能创建新的
const a = new Person('zac', 12)
const b = new Person('Isaac', 13)

const c = Person.getInstance('c', 14)
const d = Person.getInstance('d', 15)

console.info(a.name, b.name, a === b)
console.info(c, d)

console.info(Person.instance)

Person.instance = 1

const e = Person.getInstance('e', 11)
console.info(e)
