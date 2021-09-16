/*
instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
 */

function instanceOf(child, parent) {
  if (typeof child !== 'object' || parent === null) {
    return false
  }
  const prototype = parent.prototype
  let proto = child.__proto__

  while (proto !== null && proto !== undefined) {
    if (prototype === proto) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}

module.exports = instanceOf
