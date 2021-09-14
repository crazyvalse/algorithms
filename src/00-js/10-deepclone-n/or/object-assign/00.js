// const a = {
//   name: 'zac',
//   age: 12,
//   book: {
//     title: 'hello world',
//     price: 20
//   }
// }
//
// const b = {
//   name: 'isaac',
//   job: null
// }
//
// Object.assign(a, b)
// console.info(a)

const Person = {
  name: 'Isaac'
}

// Object.seal()会创建一个密封的对象，这个方法实际上会在一个现有对象上调用object.preventExtensions(...)并把所有现有属性标记为configurable:false。
// Object.seal(Person)

// Object.freeze()会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal(),并把所有现有属性标记为writable: false,这样就无法修改它们的值。
Object.freeze(Person)
Person.name = 'zac'
Person.age = 123

console.info(Person)
