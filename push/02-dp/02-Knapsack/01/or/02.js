/*
一、如果装不下当前物品，那么前n个物品的最佳组合和前n-1个物品的最佳组合是一样的。
二、如果装得下当前物品

假设1. 装当前物品，在给当前物品预留了相应空间的情况下，前n-1个物品的最佳组合加上当前物品的价值就是总价值
假设2. 不装当前物品，那么前n个物品的最佳组合和前n-1个物品的最佳组合是一样的

选取 假设1和假设2中最大的

回溯：
从表的最右下角开始回溯，如果发现前n个物品最佳组合的价值和前n-1个物品最佳组合的价值一样，说明第n个物品没有被装入。否则，第n个物品被装入。
 */
function max(a, b) {
  return a > b ? a : b
}

function dp(capacity, size, value, n) {
  var k = []
  for (let i = 0; i <= n + 1; i++) {
    k[i] = []
  }
  // 物品个数
  for (let i = 0; i <= n; i++) {
    // 容量 * 物品个数
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        k[i][w] = 0
      }
      // 装得下 总尺寸 大于等于 物品的尺寸 -> 可以再放
      // 比较装当前物品与前n-1个物品的最佳组合
      else if (size[i - 1] <= w) {
        // k[i - 1][w - size[i - 1]] -> 不添加当前物品的价值
        // value[i - 1] 当前物品的价值
        // value[i - 1] + k[i - 1][w - size[i - 1]] 添加当前物品的价值与 不添加当前物品进行对比
        k[i][w] = max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w])
      }
      // 装不下： 总尺寸 小于 当前尺寸  -> 不能再放了
      else {
        // 值等于之前的值 不放物品的值 =
        k[i][w] = k[i - 1][w]
      }
    }
  }
  console.info(k)
  return k[n][capacity]
}

// 保险箱中 物品的价值
let value = [4, 5, 10, 11, 13]
// 物品的尺寸
let size = [3, 4, 7, 8, 9]

// 1. 获得 capacity <= 16 的所有方法
// 总尺寸
let capacity = 16
let n = 5
console.info(dp(capacity, size, value, n))
const a = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0 个
  [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 1 个
  [0, 0, 0, 4, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], // 2 个
  [0, 0, 0, 4, 5, 5, 5, 10, 10, 10, 14, 15, 15, 15, 19, 19, 19], // 3 个
  [0, 0, 0, 4, 5, 5, 5, 10, 11, 11, 14, 15, 16, 16, 19, 21, 21], // 4 个
  [0, 0, 0, 4, 5, 5, 5, 10, 11, 13, 14, 15, 17, 18, 19, 21, 23], // 5 个
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
