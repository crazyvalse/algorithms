/*
46. 全排列

给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

 */
/**
 * @param {number[]} a
 * @return {number[][]}
 */
const permute = function (a) {
  const n = a.length
  const result = []
  const walk = function (index, cart) {
    if (index === n) {
      result.push(cart.slice())
      return
    }
    if (index >= n) {
      return
    }
    for (let i = 0; i < n; i++) {
      if (cart.includes(a[i])) {
        continue
      }
      cart.push(a[i])
      walk(index + 1, cart)
      cart.pop()
    }
  }
  walk(0, [])
  return result
}

console.info(permute([1, 2, 3]))
