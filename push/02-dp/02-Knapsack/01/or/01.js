function max(a, b) {
  return a > b ? a : b
}

function knapsack(capacity, size, value, n) {
  // 没有东西了 或者 容量为 0 了
  if (n === 0 || capacity === 0) {
    return 0
  }

  // 如果当前物品的尺寸大于剩余容量，返回前几个的总值
  if (size[n - 1] > capacity) {
    // 返回前几个
    return knapsack(capacity, size, value, n - 1)
  }
  // 当前物品的尺寸小于等于剩余容量
  else {
    return max(
      // a: 添加当前物品的最大值：当前物品的价值 + 其余物品的最大值
      value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
      // 不添加当前物品的最大值
      knapsack(capacity, size, value, n - 1)
    )
  }
}

// // 保险箱中 物品的价值
// let value = [4, 5, 10, 11, 13]
// // 物品的尺寸
// let size = [3, 4, 7, 8, 9]
//
// // 1. 获得 capacity <= 16的所有方法
// // 总尺寸
// let capacity = 16
// let n = 5
// console.info(knapsack(capacity, size, value, n))
//
// console.info(undefined + 1 > 1)

module.exports = knapsack
