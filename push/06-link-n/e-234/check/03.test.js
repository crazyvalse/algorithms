const { ListNode, isPalindrome } = require('./03')

test('1 [ 1, 2, 2, 1 ]', () => {
  const p4 = new ListNode(1, null)

  const p3 = new ListNode(2, p4)
  const p2 = new ListNode(2, p3)
  const p1 = new ListNode(1, p2)

  expect(isPalindrome(p1)).toEqual(true)
})

test('2', () => {
  const p3 = new ListNode(0, null)
  const p2 = new ListNode(0, p3)
  const p1 = new ListNode(1, p2)

  expect(isPalindrome(p1)).toEqual(false)
})
