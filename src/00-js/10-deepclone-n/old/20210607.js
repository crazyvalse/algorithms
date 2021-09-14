module.exports = deepClone
// 对象或者数组

function deepClone(target) {
  if (typeof target !== 'object') {
    return target
  }
  const result = Array.isArray(target) ? [] : {}

  for (let key in target) {
    result[key] = typeof target[key] === 'object' ? deepClone(target[key]) : target[key]
  }
  return result
}
