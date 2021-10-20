/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *  思路：
 *  1. 找到 start 的上一位
 *    - i < left start = current
 *  2. 以及tail
 *    - tail = current.next
 *  3. 交换指向
 * p c n
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  debugger
  const hair = new ListNode(null, head)
  let [p, c, n] = [hair, head, null]
  // 先找到 起点
  while (--left > 0 && --right > 0 && c) {
    p = c
    c = c.next
  }
  const start = p
  // 开始计算下一轮
  while (--right >= 0 && c) {
    n = c.next
    c.next = p
    p = c
    c = n
  }

  if (start && start.next) {
    start.next.next = c
    start.next = p
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
