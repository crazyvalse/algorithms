// https://labuladong.gitee.io/algo/2/18/20/
// 计算二叉树有几个节点
const { arrayToTreeNode } = require('../utils')

function count(node) {
  if (node === null) {
    return 0
  }
  return 1 + count(node.left) + count(node.right)
}

const array = [0, 1, 2, 3, 4]
const root = arrayToTreeNode(array)

console.info(count(root))
