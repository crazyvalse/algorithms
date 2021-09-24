module.exports = deepClone

/**
 * 处理 edge case
 * 1. 数组
 * 2. 对象
 * 3. undefined function
 * 4. symbol
 * 5. 循环引用
 * @param target
 * @returns {*[]|*}
 */

function deepClone(target) {
  const hash = new WeakMap()

  const walk = function (target) {
    if (!isObject(target)) {
      return target
    }
    // 如果包含
    if (hash.has(target)) {
      return hash.get(target)
    }
    const result = Array.isArray(target) ? [] : {}

    hash.set(target, result)

    // 1. 基础类型，直接赋值，其他类型交于deepClone继续处理
    // 兼容 symbol key
    Reflect.ownKeys(target).forEach((key) => {
      result[key] = isObject(target[key]) ? walk(target[key]) : target[key]
    })
    return result
  }

  return walk(target)
}

function isObject(target) {
  return (
    typeof target === 'object' &&
    target !== null &&
    target !== undefined &&
    !(target instanceof Date) &&
    !(target instanceof RegExp) &&
    typeof target !== 'symbol'
  )
}
