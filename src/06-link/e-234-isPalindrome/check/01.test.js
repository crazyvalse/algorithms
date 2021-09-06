const { ListNode, isPalindrome, findPivot, compare, reverse } = require('./01')

test('find 1', () => {
  const p3 = new ListNode(1, null)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  expect(findPivot(p1)).toEqual(p2)
})

test('find 2', () => {
  const p4 = new ListNode(1, null)

  const p3 = new ListNode(2, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  expect(findPivot(p1)).toEqual(p2)
})

test('find 3', () => {
  const p5 = new ListNode(1, null)
  const p4 = new ListNode(2, p5)

  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  expect(findPivot(p1)).toEqual(p3)
})

test('reverse 1', () => {
  const p5 = new ListNode(5, null)
  const p4 = new ListNode(4, p5)
  const p3 = new ListNode(3, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  let iterator = reverse(null, p1)
  const result = []

  while (iterator) {
    result.push(iterator.val)
    iterator = iterator.next
  }
  expect(result).toEqual([5, 4, 3, 2, 1])
})

test('1 [ 1, 2, 2, 1 ]', () => {
  const p4 = new ListNode(1, null)

  const p3 = new ListNode(2, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  expect(isPalindrome(p1)).toEqual(true)
})
