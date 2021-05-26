/*
https://labuladong.gitee.io/algo/2/17/18/
 */
const { arrayToListNode } = require('../../utils')

function traverse(root) {
  if (!root) {
    return
  }
  // 前序遍历
  console.info(root.val)
  traverse(root.next)
  // 后序遍历
  console.info(root.val)
}

const h = arrayToListNode([1, 2, 3, 4, 5, 6])
traverse(h)
