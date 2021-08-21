const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
124. 二叉树中的最大路径和

路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
路径和 是路径中各节点值的总和。
给你一个二叉树的根节点 root ，返回其 最大路径和 。

示例 1：
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

示例 2：
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

提示：

树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000

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
 * 两种选择
 * - 当成转折点
 * - 当成过客
 *  - 向左
 *  - 向右
 *
 * 1. 当前节点最大是 l + r + val
 * 2. 只当成过客，val + max(l, r)
 * 3. 如果为负， 只返回 0
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = -Infinity
  const walk = function (root) {
    if (!root) {
      return 0
    }

    const l = walk(root.left)
    const r = walk(root.right)

    // 转折点的话
    result = Math.max(result, root.val + l + r)
    // 返回非0
    // 如果只是个过客的话
    return Math.max(root.val + Math.max(l, r), 0)
  }
  walk(root)
  return result
}

module.exports = maxPathSum
