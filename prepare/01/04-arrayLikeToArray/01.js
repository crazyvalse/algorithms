// function foo(a, b, c, d) {
//   console.info(arguments)
//   console.info([...arguments])
//   console.info(Array.from(arguments))
//   console.info(Array.apply(null, arguments))
//   console.info(Array.prototype.slice.call(arguments))
// }
//
// foo(1, 2, 3, 4)

console.info(Array(1, 2, 3, 4))
console.info(new Array(1))

function Person(name, age) {
  if (this instanceof Person) {
    this.name = name
    this.age = age
  } else {
    return new Person(name, age)
  }
}

const p = new Person('zac', 20)
const p2 = Person('Isaac', 20)

console.info(p.name)
console.info(p2.name)
