// function Person() {}
//
// var person = new Person()
// person.name = 'name'
// console.info(person.name)

// prototype 是函数才会有的属性
// 只有静态方法或者静态属性才会共享
function Person() {}

Person.prototype.name = 'name'

var person = new Person()

const p2 = new Person()

console.info(person.name)
person.name = 'name of this person'
console.log(person.name) // name of this person
console.info(p2.name)

delete person.name
console.log(person.name) // name
