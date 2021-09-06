const { ListNode } = require('../../../utils')
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
 * 4. 边界情况
 * @param {ListNode} c
 * @return {ListNode}
 */
var reverse = function (c) {
  debugger
  // 最后一个点
  if (c === null || c.next === null) {
    return c
  }
  // 1 -> 2 -> 3 -> 4 -> 5
  // 找到 5
  // 现在 c === 4
  const last = reverse(c.next)
  // n === 5
  const n = c.next
  // 1 -> 2 -> 3 -> 4 <-> 5
  // n.next = 4
  n.next = c
  // 1 -> 2 -> 3 -> 4 <- 5
  //                null
  // 由于不知道前一个，所以指向 null，这样到上一个递归的时候就接上了
  // 不然不好处理头部节点
  // c.next = null
  c.next = null

  // 始终保留 5 的索引
  return last
}

module.exports = {
  reverse
}
