/**
 * 需要保留
 * - {}
 * - []
 * - function
 * 不保留
 * - null
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
  return typeof obj === 'obj' && obj !== null
}

function deepClone(source) {
  // 如果不是object，直接返回
  if (!isObject(source)) {
    return source
  }
  // 1. 兼容数组
  const target = Array.isArray(source) ? [] : {}
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
