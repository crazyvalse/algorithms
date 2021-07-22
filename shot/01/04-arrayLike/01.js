/*
1. object
2. length

from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
slice https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
apply https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
function getArgs(...args) {
  // console.info(arguments)
  console.info([...arguments])
  console.info(Array.from(arguments)) // 类数组 以及 可迭代的对象 String
  // console.info(args)
  console.info(Array.prototype.slice.call(arguments))
  console.info(Array.apply(null, arguments))
  // =>
  Array(1, 2, 3, 4)
}

// getArgs(1, 2, 3, 4)

// const s = 'foo'
// console.info(s.length)

/*
- 返回一个数组
- 数组每一项的值是它的下标
- 不适用迭代
 */

function bar(a, b, c) {
  console.info(a, b, c)
}

bar.call(null, 1, 2, 3)
// ===
bar(1, 2, 3)
//

bar.apply(null, [1, 2, 3])

const a = [1, 2, 3]

const b = Array.apply(null, a)
console.info(b)

const c = Array(1, 2, 3)
const d = new Array(1, 2, 3)
console.info(c)
console.info(d)

//
function Person(name, age) {
  // new.target == '[object Person]'
  if (this instanceof Person) {
    this.name = name
    this.#age = age
  } else {
    return new Person(name, age)
  }
}
const p1 = new Person('zac', 12)
// //
const p2 = Person('isaac', 13)
// console.info(p1, p2)
