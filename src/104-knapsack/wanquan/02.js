/*
给定 n 件物品，物品的重量为 weights[i]，物品的价值为 values[i]。
现挑选物品放入背包中，假定背包能承受的最大重量为 capacity。
问应该如何选择装入背包中的物品，使得装入背包中物品的总价值最大？
 */
/**
 *
 * @param values
 * @param weights
 * @param capacity
 */
function knapsack(capacity, weights, values) {
  const n = weights.length
  const f = Array.from({ length: capacity + 1 }, () => 0)
  for (let c = 1; c <= capacity; c++) {
    for (let w = 0; w < n; w++) {
      if (c - weights[w] >= 0) {
        f[c] = Math.max(f[c], f[c - weights[w]] + values[w])
      }
    }
  }
  return f[capacity]
}

module.exports = knapsack
