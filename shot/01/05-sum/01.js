/*
- 相加
- 返回一个值是下标的数组
 */

function build(n) {
  const walk = function (k, result) {
    if (k === n) {
      return result
    }
    result.push(k)
    return walk(k + 1, result)
  }
  return walk(0, [])
}

console.info(build(10))

function walk(n) {
  if (n === 0) {
    return [0]
  }
  return [...walk(n - 1), n]
}

console.info(walk(10))
