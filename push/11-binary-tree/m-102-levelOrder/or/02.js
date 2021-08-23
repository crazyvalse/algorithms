/*
102. 二叉树的层序遍历

给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

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
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const result = []
  const walk = function (root, level) {
    if (!root) {
      return
    }
    result[level] = result[level] || []
    result[level].push(root.val)
    walk(root.left, level + 1)
    walk(root.right, level + 1)
  }
  walk(root, 0)
  return result
}

module.exports = { levelOrder }
