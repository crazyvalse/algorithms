const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
113. 路径总和 II

给你二叉树的根节点 root 和一个整数目标和 targetSum ，
找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。

示例 1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]

示例 2：
输入：root = [1,2,3], targetSum = 5
输出：[]

示例 3：
输入：root = [1,2], targetSum = 0
输出：[]

提示：

树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
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
 *
 * 1. 从根节点到叶子节点
 * 2. 路径总和等于给定目标和的路径。
 * 3. 是指没有子节点的节点
 *
 * 停止条件
 * - total >= target
 * - root === null || (root.left === null && root.right === null)
 *
 * result = []
 *
 * walk(root, cart, sum)
 *
 * cart.push()
 * walk(root.left)
 *
 * 初始条件
 * walk(root, [], 0)
 *
 * 1 -> [rv]
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const result = []
  const walk = function (node, cart, sum) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      if (sum + node.val === target) {
        result.push([...cart, node.val])
      }
      return
    }
    cart.push(node.val)
    walk(node.left, cart, sum + node.val)
    walk(node.right, cart, sum + node.val)
    cart.pop()
  }

  walk(root, [], 0)
  return result
}

module.exports = pathSum
