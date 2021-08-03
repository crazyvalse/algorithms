/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

 */
let successor = null
var reverseN = function (c, k) {
  if (!c || !c.next) {
    return c
  }
  if (k === 1) {
    successor = c.next
    return c
  }
  const last = reverseN(c.next, k - 1)
  // 改变下一个的指针
  c.next.next = c
  // 这里只是对于第一个值有效，其他的都会被覆盖掉
  c.next = successor
  return last
}
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === 1) {
    return reverseN(head, n)
  }

  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  reverseBetween,
  ListNode
}
