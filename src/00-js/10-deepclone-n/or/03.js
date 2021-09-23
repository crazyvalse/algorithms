function isObject(obj) {
  return typeof obj === 'obj' && obj !== null
}
/**
 * 1. 兼容 自循环
 * @param source
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

const o = {
  a: 1,
  b: '2',
  c: [1, 2, 3]
}

// o.d = o
// const o2 = deepClone(o)
// console.info(o2)

// const map = {}
//
// const a = { a: 1 }
// const b = { b: 2 }
//
// map[a] = a
// map[b] = b
//
// console.info(map[a])
// console.info(Object.keys(map))

// const map = new Map()
// map.set(a, a)
// map.set(b, b)
// console.info(map.get(a))
