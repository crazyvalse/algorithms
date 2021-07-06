const { ListNode, mergeTwoLists } = require('./01')

test('1', () => {
  const p3 = new ListNode(4, undefined)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  const p6 = new ListNode(4, undefined)
  const p5 = new ListNode(3, p6)
  const p4 = new ListNode(1, p5)

  let iterator = mergeTwoLists(p1, p4)
  const result = []

  while (iterator !== null) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([ 1, 1, 2, 3, 4, 4 ])
})
