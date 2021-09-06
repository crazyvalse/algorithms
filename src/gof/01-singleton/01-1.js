// function Person(name) {
//   this.name = name
// }
//
// Person.getInstance = function (name) {
//   const instance = new Person(name)
//   Person.getInstance = function () {
//     return instance
//   }
//   return Person.getInstance()
// }
//
// Person.prototype.sayMyName = function () {
//   console.info('我叫' + this.name)
// }
//
// const a = Person.getInstance('A')
// const b = Person.getInstance('B')
//
// a.sayMyName()
// b.sayMyName()

// function foo() {
//   this.go = function () {
//     console.info('go', go)
//   }
// }
//
// const f = new foo()
//
// f.go()
