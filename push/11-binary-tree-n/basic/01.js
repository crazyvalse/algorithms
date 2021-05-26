// 遍历
const { arrayToTreeNode, treeNodeToArray } = require('../utils')
function traverse(root) {
  if (!root) {
    return
  }

  // 前序遍历
  traverse(root.left)
  console.info(root.val)
  // 中序遍历
  traverse(root.right)

  // 后序遍历
}

const root = arrayToTreeNode([0, 1, 2, 3, 4, 5, 6])
traverse(root)
