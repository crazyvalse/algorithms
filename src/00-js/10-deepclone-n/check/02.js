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
/**
 * 使用 queue 来处理
 * @param target
 */
function deepClone(target) {
  const hash = new WeakMap()
  const root = {}
  const queue = [
    {
      parent: root,
      key: undefined,
      value: target
    }
  ]
  while (queue.length) {
    const [parent, key, value] = queue.shift()
  }
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
