/*

反转前 n 个
说明:
1 ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL,  n = 4
输出: 4->3->2->1->5->NULL

 */

const { ListNode } = require('../../../utils')
/**
 *  思路：
 *  1. 找到 start 的上一位
 *    - i < left start = current
 *  2. 以及tail
 *    - tail = current.next
 *  3. 交换指向
 * p c n
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
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

module.exports = {
  reverseN: reverseN
}
