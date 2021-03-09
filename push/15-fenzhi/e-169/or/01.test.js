const majorityElement = require('./01')

test('1', () => {
  expect(majorityElement([3, 2, 3])).toBe(3)
})

test('2', () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
})
