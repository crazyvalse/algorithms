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
 * const f[n] = 容量为 n 最大价值
 *
 * f[w] = Math.max(f[w], f[w - weight[i]])
 *
 * @param weights
 * @param values
 * @param capacity
 */
function backPack(weights, values, capacity) {
  const f = Array.from({ length: capacity + 1 }, () => 0)
  for (let i = 0; i < weights.length; i++) {
    for (let c = weights[i]; c <= capacity; c++) {
      f[c] = Math.max(f[c], f[c - weights[i]] + values[i])
    }
  }
  return f[capacity]
}

module.exports = backPack
