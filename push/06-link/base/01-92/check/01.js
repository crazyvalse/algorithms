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
 * @param {ListNode} root
 * @return {ListNode}
 */
var reverse = function (root) {
  if (!root || !root.next) {
    return root
  }
  let [p, c, n] = [null, root, root.next]
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
