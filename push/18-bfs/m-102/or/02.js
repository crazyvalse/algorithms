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
 * 1. 出口
 * 所有的节点都遍历到了
 * if(root.left === null && root.right === null){
 *   return
 * }
 * 2. 参数
 * 3. 递归过程
 * 利用一个队列
 * queue
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ret = []
  if (root === null) {
    return ret
  }

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentLevelSize = q.length
    ret.push([])
    for (let i = 1; i <= currentLevelSize; i++) {
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
  }
  return ret
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

module.exports = { levelOrder, TreeNode }
