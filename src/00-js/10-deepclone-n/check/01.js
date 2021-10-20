module.exports = deepClone

/**
 * 处理 edge case
 * 1. 数组
 * 2. 对象
 * 3. undefined function
 * 4. symbol
 * 5. 循环引用
 * @param target
 * @param cache
 * @returns {*[]|*}
 */

function deepClone(target, cache = new WeakMap()) {
  if (!isObject(target)) {
    return target
  }

  if (cache.has(target)) {
    return cache.get(target)
  }

  if (target instanceof Date) {
    return new Date(target)
  }

  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags)
  }

  const copy = Array.isArray(target) ? [] : {}
  cache.set(target, copy)

  Reflect.ownKeys(target).forEach((key) => {
    copy[key] = isObject(target[key]) ? deepClone(target[key], cache) : target[key]
  })

  return copy
}

function isObject(t) {
  return typeof t === 'object' && t !== null && t !== undefined
}
