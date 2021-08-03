const { ListNode, mergeKLists } = require('./01')

test('1', () => {
  // 1, 2, 4
  const p3 = new ListNode(4, undefined)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)
  // 1, 3, 4
  const p6 = new ListNode(4, undefined)
  const p5 = new ListNode(3, p6)
  const p4 = new ListNode(1, p5)

  // 2, 3, 4, 5

  const p7 = new ListNode(5, null)
  const p8 = new ListNode(4, p7)
  const p9 = new ListNode(3, p8)
  const p10 = new ListNode(2, p9)

  let iterator = mergeKLists([p1, p4, p10])
  const result = []

  while (iterator !== null) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 4, 5])
})
