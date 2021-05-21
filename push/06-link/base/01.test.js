const { reverse } = require('./01')
const { ListNode, arrayToListNode, listNodeToArray } = require('../utils')

test('1', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5])
  const r = reverse(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([5, 4, 3, 2, 1])
})

test('2', () => {
  const h = arrayToListNode([1, 2, 3, 4, 5, 6])
  const r = reverse(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([6, 5, 4, 3, 2, 1])
})

test('3', () => {
  const h = arrayToListNode([1, 2])
  const r = reverse(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([2, 1])
})

test('4', () => {
  const h = arrayToListNode([1])
  const r = reverse(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([1])
})

test('5', () => {
  const h = arrayToListNode([])
  const r = reverse(h)
  const v = listNodeToArray(r)
  expect(v).toEqual([])
})
