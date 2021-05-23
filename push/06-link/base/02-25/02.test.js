const { reverseK } = require('./02')
const { arrayToListNode, listNodeToArray } = require('../../utils')

test('1', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5])
  const r = reverseK(h, 2)
  const v = listNodeToArray(r)
  expect(v).toEqual([2, 1, 3, 4, 5])
})

test('2', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5, 6])
  const r = reverseK(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([6, 5, 4, 3, 2, 1])
})

test('3', () => {
  const h = arrayToListNode([1, 2])
  const r = reverseK(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([2, 1])
})

test('4', () => {
  const h = arrayToListNode([1])
  const r = reverseK(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([1])
})

test('5', () => {
  const h = arrayToListNode([])
  const r = reverseK(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([])
})
