const { hasCycle, ListNode } = require('./01')

test('1', () => {
  const p4 = new ListNode(4, null)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)
  p4.next = p1

  expect(hasCycle(p1)).toEqual(true)
})

test('2', () => {
  const p4 = new ListNode(3, null)
  const p3 = new ListNode(1, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(4, p2)

  expect(hasCycle(p1)).toEqual(false)
})
