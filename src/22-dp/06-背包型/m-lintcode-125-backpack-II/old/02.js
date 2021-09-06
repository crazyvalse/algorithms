/*
125 · 背包问题 II
描述
有 n 个物品和一个大小为 m 的背包. 给定数组 A 表示每个物品的大小和数组 V 表示每个物品的价值.

问最多能装入背包的总价值是多大?

A[i], V[i], n, m 均为整数
你不能将物品进行切分
你所挑选的要装入背包的物品的总大小不能超过 m
每个物品只能取一次
样例
样例 1:

输入: m = 10, A = [2, 3, 5, 7], V = [1, 5, 2, 4]
输出: 9
解释: 装入 A[1] 和 A[3] 可以得到最大价值, V[1] + V[3] = 9
样例 2:

输入: m = 10, A = [2, 3, 8], V = [2, 5, 8]
输出: 10
解释: 装入 A[0] 和 A[2] 可以得到最大价值, V[0] + V[2] = 10
挑战
O(nm) 空间复杂度可以通过, 你能把空间复杂度优化为O(m)吗？

 */
/**
 * 重量放在索引中，价值放到数组中
 * @param capacity
 * @param weights
 * @param values
 * @returns {number}
 */
function backPack(capacity, weights, values) {
  const n = weights.length
  if (n === 0 || capacity === 0) {
    return 0
  }
  const f = Array.from({ length: capacity + 1 }, () => 0)
  for (let i = 0; i < n; i++) {
    for (let c = capacity; c >= weights[i]; c--) {
      f[c] = Math.max(f[c], f[c - weights[i]] + values[i])
    }
  }
  return f[capacity]
}

module.exports = backPack
