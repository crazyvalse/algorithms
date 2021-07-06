const findPeakElement = require('./02')

test('1', () => {
  expect(findPeakElement([1, 2, 3, 1])).toBe(2)
})

test('2', () => {
  expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5)
})

test('3', () => {
  expect(findPeakElement([1])).toBe(0)
})

test('4', () => {
  expect(findPeakElement([1, 2, 3])).toBe(2)
})
