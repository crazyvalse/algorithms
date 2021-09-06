const { removeElements, ListNode } = require('./01')

test('1', () => {
  const head = arrayToListNode([1, 2, 6, 3, 4, 5, 6])
  const newHead = removeElements(head, 6)
  expect(listNodeToArray(newHead)).toEqual([1, 2, 3, 4, 5])
})

test('2', () => {
  const head = arrayToListNode([])
  const newHead = removeElements(head, 1)
  expect(listNodeToArray(newHead)).toEqual([])
})

test('3', () => {
  const head = arrayToListNode([7, 7, 7, 7])
  const newHead = removeElements(head, 7)
  expect(listNodeToArray(newHead)).toEqual([])
})

// 数组转成链表

function arrayToListNode(array) {
  if (array.length === 0) {
    return null
  }
  let hair = new ListNode(array[0])
  let pre = hair
  for (let i = 1; i < array.length; i++) {
    const p = new ListNode(array[i])
    pre.next = p
    pre = p
  }
  return hair
}

function listNodeToArray(head) {
  let it = head
  const array = []
  while (it) {
    array.push(it.val)
    it = it.next
  }
  return array
}
