const knapsack = require('./01')

test('01背包', () => {
  // 保险箱中 物品的价值
  let value = [4, 5, 10, 11, 13]
  // 物品的尺寸
  let size = [3, 4, 7, 8, 9]

  // 1. 获得 capacity <= 16的所有方法
  // 总尺寸
  let capacity = 16
  let n = 5
  expect(knapsack(capacity, size, value, n)).toBe(23)
})
