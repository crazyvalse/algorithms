const { sort, reverse, converse, merge } = require('./02.js')

test('reverse 1', () => {
  const array = [3, 5, 6, 1, 2, 4]
  reverse(array, 1, 3)
  expect(array).toEqual([3, 1, 6, 5, 2, 4])
})

test('reverse 2', () => {
  const array = [3]
  reverse(array, 1, 1)
  expect(array).toEqual([3])
})

test('converse 1', () => {
  const array = [3, 5, 6, 1, 2, 4]
  converse(array, 0, 3)
  expect(array).toEqual([1, 3, 5, 6, 2, 4])
})

test('merge 1', () => {
  const array = [3, 5, 6, 1, 2, 4]
  merge(array, 0, 5)
  expect(array).toEqual([1, 2, 3, 4, 5, 6])
})

test('merge 2', () => {
  const array = [3, 5, 6, 1, 2, 4]
  merge(array, 1, 4)
  expect(array).toEqual([3, 1, 2, 5, 6, 4])
})

test('merge 2', () => {
  const array = [3, 5, 6, 1, 2, 4]
  merge(array, 1, 4)
  expect(array).toEqual([3, 1, 2, 5, 6, 4])
})

test('1', () => {
  const array = [2, 3, 4, 6, 9, 1, 6]
  sort(array)
  expect(array).toEqual([1, 2, 3, 4, 6, 6, 9])
})

test('1 - 1', () => {
  const array = [1, 4, 5, 2, 3, 6]
  sort(array)
  expect(array).toEqual([1, 2, 3, 4, 5, 6])
})

test('2', () => {
  const array = []
  sort(array)
  expect(array).toEqual([])
})

test('3', () => {
  const array = [1]
  sort(array)
  expect(array).toEqual([1])
})

test('4', () => {
  const array = [2, 1]
  sort(array)
  expect(array).toEqual([1, 2])
})
