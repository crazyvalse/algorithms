// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

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
 * 1. 如果是 全部参数就执行，否则返回 function
 * @param fn
 * @param length
 */
module.exports = function curry(fn, length) {
  // 缓存实际的长度
  const _length = length || fn.length
  const slice = Array.prototype.slice
  return function () {
    if (_length > arguments.length) {
      return curry(partial.apply(this, [fn].concat(slice.call(arguments))), _length - arguments.length)
    }
    return fn.apply(this, arguments)
  }
}
