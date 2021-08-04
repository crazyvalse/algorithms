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
 * @param {number[]} A
 * @return {number[][]}
 */
const permute = function (A) {
  const result = []
  const walk = function (cart) {
    if (cart.length === A.length) {
      result.push(cart.slice())
      return
    }
    for (let i = 0; i < A.length; i++) {
      if (!cart.includes(A[i])) {
        cart.push(A[i])
        walk(cart)
        cart.pop()
      }
    }
  }
  walk([])
  return result
}

console.info(permute([1, 2, 3]))
