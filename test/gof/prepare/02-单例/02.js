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

console.info(a.name, b.name, a === b)
