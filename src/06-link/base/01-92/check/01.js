const { ListNode } = require('../../../utils')
/**
 * e-206-reverseList
 *
 * 全部反转
 * 1. 出口
 * if(h===null || h.next ===null){
 *   return h
 * }
 *
 * 1 2 3 4 5
 * p c n
 *   p c n
 *
 * 只改变 c
 * @param {ListNode} root
 * @return {ListNode}
 */
const reverse = function (root) {
  let [p, c, n] = [null, root, null]
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
