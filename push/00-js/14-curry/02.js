function subCurry(fn) {
  const slice = Array.prototype.slice
  const restArgs = slice.call(arguments, 1)
  return function () {
    return fn.apply(this, restArgs.concat(slice.call(arguments)))
  }
}

function curry(fn, length) {
  length = length || fn.length
  const slice = Array.prototype.slice
  return function () {
    // length 是参数实际的长度
    // 实际长度小于方法参数长度表明只使用的部分参数，应该返回一个匿名函数
    // 否则 直接执行
    if (arguments.length < length) {
      const combined = [fn].concat(slice.call(arguments))
      // 返回一个封装了前面参数的方法
      return curry(subCurry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this.arguments)
    }
  }
}

var fn = curry(function (a, b, c) {
  return [a, b, c]
})

// console.info(fn('a', 'b', 'c')) // ["a", "b", "c"]
console.info(fn('a', 'b')('c')) // ["a", "b", "c"]
// console.info(fn('a')('b')('c')) // ["a", "b", "c"]
// console.info(fn('a')('b', 'c')) // ["a", "b", "c"]
