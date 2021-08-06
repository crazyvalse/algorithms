/*
440 · 背包问题 III

描述
给定 n 种物品, 每种物品都有无限个. 第 i 个物品的体积为 A[i], 价值为 V[i].

再给定一个容量为 m 的背包. 问可以装入背包的最大价值是多少?

不能将一个物品分成小块.
放入背包的物品的总大小不能超过 m.
样例
样例 1:

输入: A = [2, 3, 5, 7], V = [1, 5, 2, 4], m = 10
输出: 15
解释: 装入三个物品 1 (A[1] = 3, V[1] = 5), 总价值 15.
样例 2:

输入: A = [1, 2, 3], V = [1, 2, 3], m = 5
输出: 5
解释: 策略不唯一. 比如, 装入五个物品 0 (A[0] = 1, V[0] = 1).
 */
/**
 * f[i][w] 前i个物品重量为w时的最大价值
 * 当w时 放或不放
 *  放: Max(f[i][w - A[i]]) + V[i]
 *  不放: f[i - 1][w]
 * @param A
 * @param V
 * @param target
 */
function backPack(A, V, target) {
  const n = A.length
  if (n === 0 || target === 0) {
    return 0
  }
  const f = Array(target + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= target; w++) {
      if (w - A[i - 1] >= 0) {
        f[w] = Math.max(f[w - A[i - 1]] + V[i - 1], f[i][w])
      }
    }
  }
  return f[target]
}

module.exports = backPack
