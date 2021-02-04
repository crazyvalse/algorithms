function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return newObj
}

module.exports = deepClone
