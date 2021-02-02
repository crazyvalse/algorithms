// 最简单的偏函数 - 使用 bind
// 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。
// 什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。
// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
// function add(a, b) {
//   return a + b
// }
//
// const addOne = add.bind(null, 1)
// console.info(addOne(2))

function partial(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const newArgs = args.concat(Array.prototype.slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

function add(a, b) {
  return a + b + this.value
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1)

var value = 1
var obj = {
  value: 2,
  addOne
}
console.info(obj.addOne(2))
const addOneBind = addOne.bind(obj)
console.info(addOneBind(2))

const addOneBind2 = add.bind(null, 1)
console.info(addOneBind2(2)) // 在浏览器中是 4
