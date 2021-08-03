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
  if (left === right) {
    return head
  }

  const hair = new ListNode(null, head)
  let counter = 0
  let p = hair
  let c = p.next
  let n
  let l
  while (c && counter < right) {
    if (counter++ < left) {
      l = p
      p = c
      c = c.next
      continue
    }
    // 交换
    n = c.next
    c.next = p
    p = c
    c = n
  }

  if (l.next) {
    l.next.next = c
    l.next = p
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
