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
 * 1. 终止条件
 * 2. 返回结果 - 返回是后面的 head 已经指向前面的
 * 3. 参数
 * 4. 过程
 *
 * const cp = walk(c.next)
 * cp.next = c
 * c.next = null
 * return c
 *
 * 边界
 *
 * @param {ListNode} c
 * @return {ListNode}
 */
var reverseList = function (c) {
  if (!c || !c.next) {
    return c
  }

  const walk = function (p, c) {
    if (!c.next) {
      return c
    }
    const last = walk(c, c.next)
    const n = c.next
    n.next = c
    c.next = p
    return last
  }

  return walk(null, c)
}

module.exports = {
  reverseList,
  ListNode
}
