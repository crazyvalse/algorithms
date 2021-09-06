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
  const walk = function (root, l, r) {
    if (!root) {
      return true
    }
    if (root.val <= l || root.val >= r) {
      return false
    }
    return walk(root.left, l, root.val) && walk(root.right, root.val, r)
  }
  return walk(root, -Infinity, Infinity)
}

module.exports = isValidBST
