function isObject(obj) {
  return typeof obj === 'object' && obj != null
}

/**
 * 1. 兼容 Symbol
 * Reflect.ownKeys(...) === Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
 * @param source
 * @param hash
 * @returns {boolean}
 */
function deepClone(source, hash = new WeakMap()) {
  // 如果不是object，直接返回
  if (!isObject(source)) {
    return source
  }

  // 差哈希表
  if (hash.has(source)) {
    return hash.get(source)
  }

  // 1. 兼容数组
  const target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  Reflect.ownKeys(source).forEach((key) => {
    if (isObject(source[key])) {
      target[key] = deepClone(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })
  return target
}
const n = Symbol('x')

const o = {
  a: 1,
  b: '2',
  c: [1, 2, 3],
  e: Symbol('d'),
  f: function () {
    console.info(123)
  },
  g: {
    h: 'hello'
  },
  [Symbol('dd')]: 1
}

o.d = o
o[n] = 123
const o2 = deepClone(o)
console.info(o2)

// const s = new Set([1, 2, 3])
// console.info(typeof s)
