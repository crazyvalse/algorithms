const { reverseKGroup, ListNode, reversed } = require('./01')

test('1', () => {
  const p6 = new ListNode(6, undefined)
  const p5 = new ListNode(5, p6)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseKGroup(p1, 3)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([3, 2, 1, 6, 5, 4])
})

test('2', () => {
  const p1 = new ListNode(1, null)

  let iterator = reverseKGroup(p1, 1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1])
})

test('3', () => {
  let iterator = reverseKGroup(null, 1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([])
})

test('4', () => {
  const p5 = new ListNode(5, null)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseKGroup(p1, 2)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([2, 1, 4, 3, 5])
})

test('5', () => {
  const p5 = new ListNode(5, null)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseKGroup(p1, 6)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1, 2, 3, 4, 5])
})

test('6', () => {
  const p4 = new ListNode(4, null)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)
  const dummyHead = new ListNode(null, p1)
  reversed(dummyHead, 2)

  let iterator = dummyHead.next
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([2, 1, 3, 4])
})
