/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

 */
var reverseBetween = function (r, f, t) {
  const hair = new ListNode(null, r)
  let [s, p, c, n] = [hair, hair, r, null]
  // 1. 先找到翻转的起点
  while (c && --t >= 0) {
    if (--f >= 0) {
      s = p
    }
    n = c.next
    if (f < 0) {
      c.next = p
    }
    p = c
    c = n
  }
  if (s && s.next) {
    s.next.next = c
    s.next = p
  }
  return hair.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  reverseBetween,
  ListNode
}
