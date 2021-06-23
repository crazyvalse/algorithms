function Person(name) {
  this.name = name
}

Person.prototype.sayName = function () {
  console.info('My name is ' + this.name)
}

function Child(name, age) {
  // 1. 调用父类
  Person.call(this, name)
  this.age = age
}

// 2. 添加 prototype
Child.prototype = Object.create(Person.prototype, {
  // 3. 修改 constructor 指向
  constructor: {
    value: Person,
    writable: true,
    configurable: true
  }
})

Child.prototype.sayDetails = function () {
  console.info(this.name, this.age)
}

const c = new Child('Zac', 100)

c.sayName()
c.sayDetails()
