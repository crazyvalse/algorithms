const findLengthOfLCIS = require('./02.dp')

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

test('5', () => {
  expect(findLengthOfLCIS([4, 3, 6, 11, 2, 7])).toEqual(3)
})

test('6', () => {
  expect(findLengthOfLCIS([3, 6])).toEqual(2)
})

test('7', () => {
  expect(findLengthOfLCIS([1])).toEqual(1)
})
