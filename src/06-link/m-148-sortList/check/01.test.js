const { sortList } = require('./01')
const { arrayToListNode, listNodeToArray, ListNode } = require('../../utils')
// test('findPivot 1', () => {
//   const h = arrayToListNode([1, 2, 3, 4, 5, 6])
//   const v = findPivot(h)
//   expect(v.val).toBe(3)
// })
//
// test('findPivot 2', () => {
//   const h = arrayToListNode([1, 2, 3, 4, 5])
//   const v = findPivot(h)
//   expect(v.val).toBe(3)
// })
//
// test('merge 1', () => {
//   const l = arrayToListNode([1, 3])
//   const r = arrayToListNode([2, 4])
//   const v = merge(l, r)
//   const a = listNodeToArray(v)
//   expect(a).toEqual([1, 2, 3, 4])
// })

test('1', () => {
  const h = arrayToListNode([3, 2, 1, 4])
  const d = sortList(h)
  const result = listNodeToArray(d)
  expect(result).toEqual([1, 2, 3, 4])
})

test('2', () => {
  const h = arrayToListNode([3, 2, 1])
  const d = sortList(h)
  const result = listNodeToArray(d)
  expect(result).toEqual([1, 2, 3])
})
