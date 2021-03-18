const array = [{ a: 1, b: 2 }]

function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
  }
  return result
}

const b = deepCopy(array)

b[0].a = 2

console.info(array, b)
