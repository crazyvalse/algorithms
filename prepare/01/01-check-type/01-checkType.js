/*
1. 安全的类型检查
2. 使用 Object.prototype.toString.call
参考： 红宝书 596 高级函数 - 安全类型检查
 */

const toString = Object.prototype.toString
function isArray(target) {
  return toString.call(target) === '[object Array]'
}

function isString(target) {
  return toString.call(target) === '[object String]'
}

function isNumber(target) {
  return toString.call(target) === '[object Number]'
}

function isObject(target) {
  return toString.call(target) === '[object Object]'
}

function isNull(target) {
  return target === null
}

function isUndefined(target) {
  return target === undefined
}

module.exports = {
  isArray,
  isString,
  isNumber
}
