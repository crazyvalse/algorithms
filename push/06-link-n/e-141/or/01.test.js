const { ListNode, hasCycle } = require('./01')

test('1', () => {
  const p4 = new ListNode(-4, null)
  const p3 = new ListNode(0, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(3, p2)
  p4.next = p2

  expect(hasCycle(p1)).toEqual(true)
})

test('2', () => {
  const p2 = new ListNode(2, null)
  const p1 = new ListNode(1, p2)
  p2.next = p1

  expect(hasCycle(p1)).toEqual(true)
})

test('3', () => {
  const p1 = new ListNode(1, null)

  expect(hasCycle(p1)).toEqual(false)
})

test('4', () => {
  expect(hasCycle(null)).toEqual(false)
})
