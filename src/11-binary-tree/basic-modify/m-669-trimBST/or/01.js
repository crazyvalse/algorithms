const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
669. 修剪二叉搜索树

给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。
通过修剪二叉搜索树，使得所有节点的值在[low, high]中。
修剪树不应该改变保留在树中的元素的相对结构（即，如果没有被移除，原有的父代子代关系都应当保留）。
可以证明，存在唯一的答案。

所以结果应当返回修剪好的二叉搜索树的新的根节点。
注意，根节点可能会根据给定的边界发生改变。



示例 1：


输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
示例 2：


输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
输出：[3,2,null,1]
示例 3：

输入：root = [1], low = 1, high = 2
输出：[1]
示例 4：

输入：root = [1,null,2], low = 1, high = 3
输出：[1,null,2]
示例 5：

输入：root = [1,null,2], low = 2, high = 4
输出：[2]


提示：

树中节点数在范围 [1, 104] 内
0 <= Node.val <= 104
树中每个节点的值都是唯一的
题目数据保证输入是一棵有效的二叉搜索树
0 <= low <= high <= 104
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * // 如果不在范围内，就删除，在范围内下一个。
 * @param {TreeNode} root
 * @param {number} l
 * @param {number} r
 * @return {TreeNode}
 */
var trimBST = function (root, l, r) {
  if (!root) {
    return root
  }
  // 如果超出root.val，使用 left
  if (root.val > r) {
    return trimBST(root.left, l, r)
  }
  // 如果小于，使用right
  if (root.val < l) {
    return trimBST(root.right, l, r)
  }
  // 不变的接收新的节点
  root.left = trimBST(root.left, l, r)
  root.right = trimBST(root.right, l, r)
  return root
}

module.exports = trimBST
