const knapsack = require('./01')

test('1', () => {
  // 保险箱中 物品的价值
  let values = [4, 5, 10, 11, 13]
  // 物品的尺寸
  let weights = [3, 4, 7, 8, 9]

  // 1. 获得 capacity <= 16的所有方法
  // 总尺寸
  let capacity = 16
  expect(knapsack(capacity, weights, values)).toBe(23)
})

test('2', () => {
  // 保险箱中 物品的价值
  let values = [4]
  // 物品的尺寸
  let weights = [3]

  // 1. 获得 capacity <= 16的所有方法
  // 总尺寸
  let capacity = 16
  expect(knapsack(capacity, weights, values)).toBe(4)
})

test('3', () => {
  // 1. 获得 capacity <= 16的所有方法
  let capacity = 10

  // 物品的尺寸
  let weights = [2, 3, 5, 7]

  // 保险箱中 物品的价值
  let values = [1, 5, 2, 4]
  expect(knapsack(capacity, weights, values)).toBe(9)
})
