/*
一、如果装不下当前物品，那么前n个物品的最佳组合和前n-1个物品的最佳组合是一样的。
二、如果装得下当前物品

假设1. 装当前物品，在给当前物品预留了相应空间的情况下，前n-1个物品的最佳组合加上当前物品的价值就是总价值
假设2. 不装当前物品，那么前n个物品的最佳组合和前n-1个物品的最佳组合是一样的

选取 假设1和假设2中最大的

回溯：
从表的最右下角开始回溯，如果发现前n个物品最佳组合的价值和前n-1个物品最佳组合的价值一样，说明第n个物品没有被装入。否则，第n个物品被装入。
 */

const max = function (a, b) {
  return a > b ? a : b
}

const knapsack = function (values, sizes, capacity) {
  const length = values.length
  // 1. 初始化大数组 - dp[n][s] n 物品的数量, s是size,
  // 从 0 开始
  const dp = Array.from(new Array(length + 1), () => {
    return Array.from(new Array(capacity), () => 0)
  })

  // 2. 状态转移
  for (let n = 1; n < values.length + 1; n++) {
    const currentIndex = n - 1
    for (let s = 1; s < capacity + 1; s++) {
      // 判断是否能装下
      // 装不下
      if (sizes[currentIndex] > s) {
        dp[n][s] = dp[n - 1][s] || 0
      } else {
        // 能装下 比较添加前和添加后的最佳值
        dp[n][s] = max(dp[n - 1][s], values[currentIndex] + (dp[n - 1][s - sizes[currentIndex]] || 0))
      }
    }
  }
  return dp[length][capacity]
}

// 保险箱中 物品的价值
let values = [4, 5, 10, 11, 13]
// 物品的尺寸
let sizes = [3, 4, 7, 8, 9]

// 1. 获得 capacity <= 16的所有方法
// 总尺寸
let capacity = 16
let n = 5
console.info(knapsack(values, sizes, capacity))

const a = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0 个
  [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [0, 0, 0, 4, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [0, 0, 0, 4, 5, 5, 5, 10, 10, 10, 14, 15, 15, 15, 19, 19, 19],
  [0, 0, 0, 4, 5, 5, 5, 10, 11, 11, 14, 15, 16, 16, 19, 21, 21],
  [0, 0, 0, 4, 5, 5, 5, 10, 11, 13, 14, 15, 17, 18, 19, 21, 23]
]
