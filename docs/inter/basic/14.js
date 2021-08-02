// function Person(name) {
//   this.name = name
// }
// console.info(Reflect.construct(Person, ['zac']))

const array = [13, 6, 10, 11, 16]
const max = Math.max.apply(Math, array)
console.info(max)
