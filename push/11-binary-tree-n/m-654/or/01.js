const { TreeNode } = require('../../utils')

/**
 * 1. 先构建根节点，遍历左右子节点
 * @param array
 */
const constructMaximumBinaryTree = function (array) {
  // 找到最大节点
  if (array.length < 1) {
    return null
  }

  const walk = function (left, right) {
    if (left > right) {
      return
    }
    let maxIndex = left
    for (let i = left; i <= right; i++) {
      if (array[i] > array[maxIndex]) {
        maxIndex = i
      }
    }
    const root = new TreeNode(array[maxIndex])
    root.left = walk(left, maxIndex - 1)
    root.right = walk(maxIndex + 1, right)
    return root
  }

  return walk(0, array.length - 1)
}

module.exports = constructMaximumBinaryTree
