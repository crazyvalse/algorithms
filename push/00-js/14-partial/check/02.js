// function nameDecorator(target, key, descriptor) {
//   const oldValue = descriptor.value
//   descriptor.value = function (...args) {
//     return oldValue.apply(this, args) + 123
//   }
//   return descriptor
// }
//
// class Person {
//   constructor() {
//     this.name = 'jake'
//   }
//   @nameDecorator
//   getName() {
//     return this.name
//   }
// }
//
// let p1 = new Person()
// console.log(p1.getName())

//
class Math {
  @log
  add(a, b) {
    return a + b
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function (...args) {
    console.log('args:', args)
    console.log(`Calling [${name}] with`, ...args)
    return oldValue.call(this, ...args)
  }

  return descriptor
}

const math = new Math()

// passed parameters should get logged now
let result = math.add(2, 4)

console.log(result)
