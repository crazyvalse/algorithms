const removeNthFromEnd = require('./01')
const { ListNode, arrayToListNode, listNodeToArray } = require('../../utils')

test('1', () => {
  const head = arrayToListNode([1, 2, 3, 4, 5])
  const a = listNodeToArray(removeNthFromEnd(head, 2))

  expect(a).toEqual([1, 2, 3, 5])
})

test('2', () => {
  const head = arrayToListNode([1])
  const a = listNodeToArray(removeNthFromEnd(head, 1))
  expect(a).toEqual([])
})

test('3', () => {
  const head = arrayToListNode([1, 2])
  const a = listNodeToArray(removeNthFromEnd(head, 1))

  expect(a).toEqual([1])
})
