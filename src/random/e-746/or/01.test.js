const minCostClimbingStairs = require('./01')

test('1', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
})

test('2', () => {
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
})
