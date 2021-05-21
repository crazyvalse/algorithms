const { reverseN } = require('./02')
const { arrayToListNode, listNodeToArray } = require('../utils')

test('1', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5])
  const r = reverseN(h, 4)
  const v = listNodeToArray(r)
  expect(v).toEqual([4, 3, 2, 1, 5])
})

test('2', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5, 6])
  const r = reverseN(h, 3)
  const v = listNodeToArray(r)
  expect(v).toEqual([3, 2, 1, 4, 5, 6])
})

test('3', () => {
  const h = arrayToListNode([1, 2])
  const r = reverseN(h, 1)
  const v = listNodeToArray(r)
  expect(v).toEqual([1, 2])
})

test('4', () => {
  const h = arrayToListNode([1])
  const r = reverseN(h, 1)
  const v = listNodeToArray(r)
  expect(v).toEqual([1])
})

test('5', () => {
  const h = arrayToListNode([1, 2])
  const r = reverseN(h, 2)
  const v = listNodeToArray(r)
  expect(v).toEqual([2, 1])
})

test('6', () => {
  const h = arrayToListNode([])
  const r = reverseN(h, 0)
  const v = listNodeToArray(r)
  expect(v).toEqual([])
})
