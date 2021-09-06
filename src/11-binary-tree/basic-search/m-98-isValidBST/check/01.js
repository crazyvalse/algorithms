const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
98. 验证二叉搜索树
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true

示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false

解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
 */
/**
 * 1. 中序遍历，是递增的
 * 2. 中间节点值左侧最大，右侧最小
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) {
    return false
  }
  let p = null
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // 不能等于
    if (p !== null && root.val <= p) {
      return false
    }
    p = root.val
    root = root.right
  }
  return true
}

module.exports = isValidBST
