const sort = require('./01.js')

test('1', () => {
  expect(sort([2, 3, 4, 6, 9, 1, 6])).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('2', () => {
  expect(sort([])).toEqual([])
})

test('3', () => {
  expect(sort([1])).toEqual([1])
})

test('4', () => {
  expect(sort([2, 1])).toEqual([1, 2])
})
