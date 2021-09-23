/*
instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
 */

function instanceOf(instance, target) {
  const prototype = target.prototype

  let _proto = instance.__proto__

  while (_proto) {
    if (_proto === prototype) {
      return true
    }
    _proto = _proto.__proto__
  }
  return false
}

module.exports = instanceOf
