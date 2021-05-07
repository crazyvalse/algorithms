const findMaxConsecutiveOnes = require('./03')

test('1', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3)
})

test('2', () => {
  expect(findMaxConsecutiveOnes([1])).toBe(1)
})

test('3', () => {
  expect(findMaxConsecutiveOnes([0])).toBe(0)
})
