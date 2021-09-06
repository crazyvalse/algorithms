function Person(name, age) {
  this.name = name
  this.age = age
  const instance = this
  Person = function () {
    return instance
  }
  return new Person()
}

Person.prototype.getDetails = function () {
  console.info(this.name, this.age)
}

const a = new Person('A', 12)
const b = new Person('B', 12)
const c = new Person('C', 12)

const d = Person('D', 12)

a.getDetails()
b.getDetails()
c.getDetails()
d.getDetails()
