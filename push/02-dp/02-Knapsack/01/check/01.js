/*
1. 先做大数组 dp[i][w] 最大值 i为编号 w为重量，补充一个 -1行
2. 遍历

if, weights[i] > w, dp[i][w] = dp[i - 1][w] 等于上一个
else dp[i][w] = Math.max(
// 添加
values[i] + dp[i - 1][ w - weights[i]]
// 不添加
dp[i - 1][w]
)
 */

function knapsack(values, weights, capacity) {
  const length = values.length
  const dp = Array.from(new Array(length), () => new Array(capacity + 1).fill(0))
  dp[-1] = new Array(capacity + 1).fill(0)
  for (let i = 0; i < length; i++) {
    for (let w = 1; w < capacity + 1; w++) {
      if (weights[i] > w) {
        dp[i][w] = dp[i - 1][w]
      } else {
        dp[i][w] = Math.max(
          // 不添加
          dp[i - 1][w],
          // 添加
          values[i] + dp[i - 1][w - weights[i]]
        )
      }
    }
  }

  // 选择物品
  let w = capacity
  const selected = []
  for (let i = length - 1; i >= 0; i--) {
    // 说明放了该物品
    if (dp[i][w] > dp[i - 1][w]) {
      selected.push(i)
      w -= weights[i]
    }
  }

  return {
    max: dp[length - 1][capacity],
    selected
  }
}

// 保险箱中 物品的价值
let values = [4, 5, 10, 11, 13]
// 物品的尺寸
let weights = [3, 4, 7, 8, 9]

// 1. 获得 capacity <= 16 的所有方法
// 总尺寸
let capacity = 16
console.info(knapsack(values, weights, capacity))
