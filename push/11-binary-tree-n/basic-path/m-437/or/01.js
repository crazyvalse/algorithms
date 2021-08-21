const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
437. 路径总和 III

给定一个二叉树的根节点 root，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例 1：
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。

示例 2：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * result = 0
 * walk(root, sum){
 *
 * }
 * 1. 停止条件
 * root === null
 *
 * 2. 过程
 * 某一个节点
 *
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var pathSum = function (root, target) {
  if (!root) {
    return 0
  }
  const walk = function (root, sum) {
    if (!root) {
      return 0
    }

    // 当前的计算结果，即使等于了target，但是加减后面的数，仍然有可能等于target
    const n = root.val + sum === target

    return n + walk(root.left, sum + root.val) + walk(root.right, sum + root.val)
  }
  return walk(root, 0) + pathSum(root.left, target) + pathSum(root.right, target)
}

module.exports = pathSum
