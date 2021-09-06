/*
给定 n 件物品，物品的重量为 weights[i]，物品的价值为 values[i]。
现挑选物品放入背包中，假定背包能承受的最大重量为 capacity。
问应该如何选择装入背包中的物品，使得装入背包中物品的总价值最大？

https://www.lintcode.com/problem/backpack-ii/
 */
/**
 * f[i] 最大价值
 *
 * f[i] = Max(f[i], f[i - weights[i]] + values[i])
 * @param values
 * @param weights
 * @param capacity
 */
function knapsack(capacity, weights, values) {
  const n = weights.length
  const f = Array.from({ length: capacity + 1 }, () => 0)
  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      f[w] = Math.max(f[w - 1], f[w - weights[i]] + values[i])
    }
  }
  return f[capacity]
}

module.exports = knapsack
