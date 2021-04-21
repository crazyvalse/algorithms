const knapsack = require('./02')

test('1', () => {
  // 保险箱中 物品的价值
  let values = [5, 10, 20]
  // 物品的尺寸
  let weights = [3, 2, 2]

  // 1. 获得 capacity <= 16的所有方法
  // 总尺寸
  let capacity = 5
  expect(knapsack(capacity, weights, values)).toBe(40)
})

test('2', () => {
  // 保险箱中 物品的价值
  let values = [4]
  // 物品的尺寸
  let weights = [3]

  // 1. 获得 capacity <= 16的所有方法
  // 总尺寸
  let capacity = 16
  expect(knapsack(capacity, weights, values)).toBe(20)
})

test('3', () => {
  // 1. 获得 capacity <= 16的所有方法
  let capacity = 10

  // 物品的尺寸
  let weights = [2, 3, 4, 7]

  // 保险箱中 物品的价值
  let values = [1, 3, 5, 9]
  expect(knapsack(capacity, weights, values)).toBe(12)
})
