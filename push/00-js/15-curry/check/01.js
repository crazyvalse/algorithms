function partial(fn) {
  const slice = Array.prototype.slice
  const partArgs = slice.call(arguments, 1)
  return function () {
    return fn.apply(this, partArgs.concat(slice.call(arguments)))
  }
}

/**
 * 1. 如果 fn.length < arguments.length， 说明是需要缓存参数，那么返回一个 partial function
 * 2. 否则 返回执行结果
 * @param fn
 * @param length
 */
module.exports = function curry(fn, length) {
  const slice = Array.prototype.slice
  length = length || fn.length
  return function () {
    if (arguments.length < length) {
      return curry(partial.apply(this, [fn].concat(slice.call(arguments))), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}
