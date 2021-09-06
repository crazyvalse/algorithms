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
  const n = values.length
  const f = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0))
  // 遍历每一个物品
  for (let index = 1; index <= n; index++) {
    //
    for (let c = 0; c <= capacity; c++) {
      if (c < weights[index - 1]) {
        f[index][c] = f[index - 1][c]
      } else {
        f[index][c] = Math.max(f[index - 1][c], f[index - 1][c - weights[index - 1]] + values[index - 1])
      }
    }
  }
  return f[n][capacity]
}

module.exports = knapsack
