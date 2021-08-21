const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

/*
814. 二叉树剪枝

给定二叉树根结点root，此外树的每个结点的值要么是 0，要么是 1。

返回移除了所有不包含 1 的子树的原二叉树。

( 节点 X 的子树为 X 本身，以及所有 X 的后代。)

示例1:
输入: [1,null,0,0,1]
输出: [1,null,0,null,1]

解释:
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。


示例2:
输入: [1,0,1,0,0,0,1]
  输出: [1,null,1,null,1]



示例3:
输入: [1,1,0,1,1,0,1,0]
输出: [1,1,0,1,1,null,1]



说明:

给定的二叉树最多有200个节点。
每个节点的值只会为0 或1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-pruning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 停止条件
 *
 * 2. 返回值
 * 2.1
 * boolean 是否含有1
 *
 * 如果返回值是 true的话，保留子节点
 * 返回值是false的话，置为 null
 *
 * 2.2 返回 tn
 * - null: root.val === 0 且root.left === null && root.right === null
 * - root.val === 1 root
 *
 * fake = new TreeNode(null, root)
 *
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) {
    return null
  }
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  if (root.val === 0 && root.left === null && root.right === null) {
    return null
  }
  return root
}

module.exports = pruneTree
