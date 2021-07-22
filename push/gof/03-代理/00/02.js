// // function Person(name, age) {
// //   this.name = name
// //   this.age = age
// // }
// //
// // Person.prototype.sayName = function () {
// //   console.info(this.name)
// // }
// //
// // const p = new Person('zac', 12)
// //
// // p.sayName()
// // console.info(Object.getPrototypeOf(p) === Person.prototype)
//
// const person = {
//   sayName() {
//     console.info('Isaac')
//   }
// }
//
// const friends = Object.create(person)
//
// console.info(Object.getPrototypeOf(person))
//
// const dog = {
//   sayName() {
//     console.info('dog')
//   }
// }
//
// Object.setPrototypeOf(friends, dog)
//
// friends.sayName()
//
//

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function () {
  console.info(this.name)
}

var getSingle = function (fn) {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

const p = Person.apply(this, ['zac'])
