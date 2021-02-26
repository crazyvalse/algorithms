const { reverseBetween, ListNode } = require('./01')

test('1', () => {
  const p6 = new ListNode(6, undefined)
  const p5 = new ListNode(5, p6)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseBetween(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([2, 1, 4, 3, 6, 5])
})

test('2', () => {
  const p6 = new ListNode(6, undefined)
  const p5 = new ListNode(5, p6)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)

  let iterator = reverseBetween(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([4, 3, 6, 5])
})
