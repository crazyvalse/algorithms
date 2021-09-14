// 1. 初步实现能够使用私有变量
// 2. 实现公共 prototype
// 3. 返回值： a. 返回值是对象：返回对象；b. 返回值是基本类型: 返回obj
module.exports = function ObjectFactory(fn) {
  const obj = {}
  const result = fn.apply(obj, Array.prototype.slice(arguments, 1))
  obj.__proto__ = fn.prototype
  obj.constructor = fn
  return typeof result === 'object' ? result : obj
}
