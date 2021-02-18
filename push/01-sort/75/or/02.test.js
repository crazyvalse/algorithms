const sortColors = require('./02')

test('排序 1', () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2])
})

test('排序 2', () => {
  expect(sortColors([2, 0, 1])).toEqual([0, 1, 2])
})

test('排序 3', () => {
  expect(sortColors([0])).toEqual([0])
})

test('排序 4', () => {
  expect(sortColors([1])).toEqual([1])
})
