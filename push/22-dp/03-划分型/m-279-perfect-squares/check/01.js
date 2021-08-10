/*
279. 完全平方数

给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

示例 1：
输入：n = 12
输出：3
解释：12 = 4 + 4 + 4

示例 2：
输入：n = 13
输出：2
解释：13 = 4 + 9

提示：

1 <= n <= 104

 */

/**
 * f[n] 为组成n需要最小平方个数
 *
 * 8
 * @param {number} top
 * @return {number}
 */
var numSquares = function (top) {
  const n = parseInt(Math.sqrt(top))
  const f = Array(top + 1).fill(Infinity)
  f[0] = 0
  for (let i = 1; i <= n; i++) {
    const a = i * i
    for (let t = a; t <= top; t++) {
      f[t] = Math.min(f[t], f[t - a] + 1)
    }
  }
  return f[top] === Infinity ? -1 : f[top]
}

module.exports = numSquares

console.info(parseInt(Math.sqrt()))
