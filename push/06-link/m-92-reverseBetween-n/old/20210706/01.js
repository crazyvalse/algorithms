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
 * 1. 先找到 m -> pre 然后一个counter m - n + 1
 *
 * 边界检查
 * 1. 头
 * 2. 尾巴
 * 3. 不满足
 *
 * p c n
 * 计数
 * 先找到
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const hair = new ListNode(null, head)
  let pre = hair
  let cur = head
  let counter = 1
  let next
  let start
  while (cur && counter <= right) {
    if (counter < left) {
      start = pre
      pre = cur
      cur = cur.next
      counter++
      continue
    }
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
    counter++
  }

  if (start.next) {
    start.next.next = cur
    start.next = pre
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
