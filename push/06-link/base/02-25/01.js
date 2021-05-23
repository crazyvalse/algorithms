/**
 * e-206-reverseList
 *
 * 全部反转
 * 1. 出口
 * if(h===null || h.next ===null){
 *   return h
 * }
 * 2. 返回值 - 反转后的头
 *
 * 3. 递归过程
 * 1 -> 2 -> 3 -> 4 -> 5
 *      c    n    l
 * 1 <- 2 <- 3 <- 4 -> 5
 *           c    n    l
 *
 * https://labuladong.gitee.io/algo/2/17/16/
 * 全部反转
 * @param {ListNode} c
 * @return {ListNode}
 */
const { ListNode } = require('../../utils')
var reverse = function (head) {
  let p = null
  let c = head
  let n = null
  while (c) {
    n = c.next
    c.next = p
    p = c
    c = n
  }
  return p
}

module.exports = {
  reverse
}
