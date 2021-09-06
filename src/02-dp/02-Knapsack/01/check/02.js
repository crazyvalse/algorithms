/*
放到一个数组当中
 */

function knapsack(values, weights, capacity) {
  const length = values.length
  const dp = new Array(capacity + 1).fill(0)
  for (let i = 0; i < length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i])
    }
  }
  return dp[capacity]
}
// 保险箱中 物品的价值
let values = [4, 5, 10, 11, 13]
// 物品的尺寸
let weights = [3, 4, 7, 8, 9]

// 1. 获得 capacity <= 16 的所有方法
// 总尺寸
let capacity = 16
console.info(knapsack(values, weights, capacity))
