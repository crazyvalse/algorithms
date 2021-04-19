const findLengthOfLCIS = require('./01')

test('1', () => {
  expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toEqual(3)
})

test('2', () => {
  expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toEqual(1)
})

test('3', () => {
  expect(findLengthOfLCIS([])).toEqual(0)
})

test('4', () => {
  expect(findLengthOfLCIS([4, 3, 6, 11, 2, 3, 4, 5, 6, 7])).toEqual(6)
})
