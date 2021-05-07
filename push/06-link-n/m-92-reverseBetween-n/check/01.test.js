const { reverseBetween, ListNode } = require('./01')

test('1', () => {
  const p5 = new ListNode(5, undefined)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseBetween(p1, 2, 4)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1, 4, 3, 2, 5])
})

test('2', () => {
  const p5 = new ListNode(5, undefined)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverseBetween(p1, 1, 4)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([4, 3, 2, 1, 5])
})
