const longestOnes = require('./02')

test('1', () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
})

test('2', () => {
  expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10)
})

test('3', () => {
  expect(longestOnes([0, 0, 0, 1], 4)).toBe(4)
})
