// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

module.exports = curry
/**
 * 分为两种情况
 * 1. 当传入的参数数量小于函数参数数量时，继续返回一个匿名函数，并把所有传入的参数缓存
 * 2. 当大于等于函数总数时，调用
 * @param fn
 * @returns {(function(...[*]=): (function(...[*]): *))|*}
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...nArgs) {
        return curried.apply(this, [...args, ...nArgs])
      }
    }
  }
}
