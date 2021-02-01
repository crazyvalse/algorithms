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

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}

const obj2 = deepClone(obj)

console.info(obj2)

obj2.c = 4

console.info(obj, obj2)
