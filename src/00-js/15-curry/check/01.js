// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

function partial(fn, ...args) {
  return function (...innerArgs) {
    return fn.apply(this, [...args, ...innerArgs])
  }
}

function curry(fn, length) {
  length = length || fn.length
  return function (...args) {
    if (args.length >= length) {
      return fn.apply(this, args)
    }
    return curry(partial.apply(this, [fn, ...args]), length - args.length)
  }
}

module.exports = curry
