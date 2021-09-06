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
  const dummyHead = new ListNode(null, head)
  let start = dummyHead
  let pre = start
  let current = head
  let next = current.next

  let counter = 1

  while (current && counter <= right) {
    // 小于 left的时候，开始记录 start
    if (counter < left) {
      start = current
    }
    // 开始交换
    next = current.next
    // 改变指向
    if (left < counter) {
      current.next = pre
    }
    // 下一轮
    pre = current
    current = next
    counter++
  }

  // 调整结尾
  start.next.next = current
  start.next = pre

  return dummyHead.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  reverseBetween,
  ListNode
}
