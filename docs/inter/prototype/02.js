class Person {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.info('My name is ' + this.name)
  }

  static go() {
    console.info('static go')
  }
}

Person.go()

class Child extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const c = new Child('Isaac', 112)

c.sayName()
Child.go()
