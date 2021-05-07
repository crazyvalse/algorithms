const { swapPairs, ListNode } = require('./03')

test('1', () => {
  const p6 = new ListNode(6, undefined)
  const p5 = new ListNode(5, p6)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = swapPairs(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([2, 1, 4, 3, 6, 5])
})

test('2', () => {
  const p1 = new ListNode(1, null)

  let iterator = swapPairs(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1])
})

test('3', () => {
  let iterator = swapPairs(null)
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

  let iterator = swapPairs(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([2, 1, 4, 3, 5])
})
