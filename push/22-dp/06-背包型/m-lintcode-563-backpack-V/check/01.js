/*
563 · 背包问题 V

描述
给出 n 个物品, 以及一个数组, nums[i] 代表第i个物品的大小, 保证大小均为正数,
正整数 target 表示背包的大小, 找到能填满背包的方案数。
每一个物品只能使用一次

样例
给出候选物品集合 [1,2,3,3,7] 以及 target 7

结果的集合为:
[7]
[1,3,3]
返回 2
 */
/**
 * f[i][w] i：数组的索引；w：重量
 *
 * f[i][w] = f[i - 1][w] + f[i - A[i]][w]
 * @param A
 * @param target
 */
function backPack(A, target) {
  // write your code here
  const n = A.length
  if (target === 0 || A.length === 0) {
    return 0
  }
  const f = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0))
  f[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let t = 0; t <= target; t++) {
      f[i][t] = f[i - 1][t]
      if (t - A[i - 1] >= 0) {
        f[i][t] += f[i - 1][t - A[i - 1]]
      }
    }
  }
  return f[n][target]
}

module.exports = backPack
