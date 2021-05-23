/**
 * 1 -> 2 -> 3 -> 4 -> 5
 *      c    n    l
 * 1 <- 2 <- 3 <- 4 -> 5
 *           c    n    l
 *
 * https://labuladong.gitee.io/algo/2/17/17/
 * 反转区间 [a, b) 的元素，注意是左闭右开
 * @param {ListNode} c
 * @return {ListNode}
 */
const { ListNode } = require('../../utils')
var reverse = function (a, b) {
  let p = null
  let c = a
  let n = null
  while (c !== b) {
    n = c.next
    c.next = p
    p = c
    c = n
  }
  return p
}

function reverseK(head, k) {
  let counter = 0
  let b = head
  while (counter++ !== k) {
    b = b.next
  }
  // 反转完，返回新头部。head 为最后的一个元素
  const newHead = reverse(head, b)
  head.next = b
  return newHead
}

module.exports = {
  reverse,
  reverseK
}
