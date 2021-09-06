/*
562 · 背包问题 IV

描述
描述
给出 n 个物品, 以及一个数组, nums[i]代表第i个物品的大小,
保证大小均为正数并且没有重复, 正整数 target 表示背包的大小, 找到能填满背包的方案数。
每一个物品可以使用无数次

样例
样例1
输入: nums = [2,3,6,7] 和 target = 7
输出: 2
解释:
方案有:
[7]
[2, 2, 3]

样例2
输入: nums = [2,3,4,5] 和 target = 7
输出: 3
解释:
方案有:
[2, 5]
[3, 4]
[2, 2, 3]
 */
/**
 * 状态
 * f[i][w] 前i个重量为w的方案数
 *
 * 转移方程
 * f[i][w] = f[i][w - A[i - 1]] + f[i - 1][w]
 *
 * if( w - A[i-1]>= 0){
 *   f[i][w] = f[i][w - A[i - 1]] + f[i - 1][w]
 * } else {
 *   f[i][w] = f[i - 1][w]
 * }
 *
 * 初始状态
 * f = 0
 *  f[0][0] = 1
 * @param A
 * @param target
 */
function backPack(A, target) {
  const n = A.length
  if (n === 0 || target === 0) {
    return
  }
  const f = Array.from({ length: n + 1 }, () => Array.from({ length: target + 1 }, () => 0))
  f[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= target; w++) {
      if (w - A[i - 1] >= 0) {
        f[i][w] = f[i][w - A[i - 1]] + f[i - 1][w]
      } else {
        f[i][w] = f[i - 1][w]
      }
    }
  }
  return f[n][target]
}

module.exports = backPack
