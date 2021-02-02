// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

function curry(fn) {
  const slice = Array.prototype.slice
  const restArgs = slice.call(arguments, 1)
  return function () {
    const args = restArgs.concat(slice.call(arguments))
    return fn.apply(this, args)
  }
}

function add(a, b) {
  return a + b
}

// var addCurry = curry(add, 1, 2)
// console.info(addCurry())
// 或者
var addCurry = curry(add, 1)
console.info(addCurry(2))
// 或者
// var addCurry = curry(add)
// addCurry(1, 2) // 3
