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
  const n = values.length
  let result = 0
  const visited = Array(n).fill(false)
  const walk = function (index, cart, hold) {
    if (hold > capacity || index > n) {
      return
    }
    result = Math.max(result, cart)
    for (let i = 0; i < n; i++) {
      if (hold + weights[i] <= capacity && !visited[i]) {
        visited[i] = true
        walk(index + 1, cart + values[i], hold + weights[i])
        visited[i] = false
      }
    }
  }
  walk(0, 0, 0)
  return result
}

module.exports = knapsack
