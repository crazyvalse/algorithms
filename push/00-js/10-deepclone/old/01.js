module.exports = function deepClone(target) {
  if (typeof target !== 'object') {
    return target
  }
  const result = Array.isArray(target) ? [] : {}
  for (let key in target) {
    result[key] = typeof target[key] === 'object' ? deepClone(target[key]) : target[key]
  }
  return result
}
