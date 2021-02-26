/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * null -> 1 -> 2 -> 3 -> 4 -> 5
 *    p    c    n
 * null <- 1    2
 *         p    c    n
 *
 * 边界检查：
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function walk(pre, current) {
    if (!current) {
      return pre
    }
    let next = current.next
    current.next = pre
    return walk(current, next)
  }
  return walk(null, head)
}

module.exports = {
  reverseList,
  ListNode
}
