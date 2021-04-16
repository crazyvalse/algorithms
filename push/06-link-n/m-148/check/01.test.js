const { sortList, ListNode } = require('./01')

test('1', () => {
  const p4 = new ListNode(3, undefined)
  const p3 = new ListNode(1, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(4, p2)

  let iterator = sortList(p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([1, 2, 3, 4])
})
