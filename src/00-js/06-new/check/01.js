/**
 * 1. 创建一个 obj
 * 2. 把方法的 this 指向给 obj
 * 3. 定义 __proto__
 * @param fn
 */
module.exports = function ObjectFactory(fn, ...args) {
  const obj = {
    __proto__: fn.prototype,
    constructor: fn.prototype.constructor
  }
  const result = fn.apply(obj, args)
  return typeof result === 'object' ? result : obj
}
