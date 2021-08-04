/*
77. 组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 */

/**
 * 思路：每个位置有 n - i 个选择，共有k个位置 i <k
 * 1. 出口
 * cart.length === k
 * result.push(cart)
 *
 * 2. 参数
 * index 当前 cart 的位置索引
 * cart 结果
 * 3. 过程
 *
 * if
 * // 给每个位置选数字
 * for(let i = index; i < n; i ++)
 * cart.push(i)
 * walk(index, cart)
 * cart.pop()
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []

  const walk = function (index, cart) {
    if (cart.length === k) {
      result.push(cart.slice())
      return
    }

    for (let i = index; i <= n; i++) {
      cart.push(i)
      walk(i + 1, cart)
      cart.pop()
    }
  }
  walk(1, [])
  return result
}

console.info(combine(4, 2))
