/*
94. 二叉树的中序遍历

给定一个二叉树的根节点 root ，返回它的 中序 遍历。



示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[2,1]
示例 5：


输入：root = [1,null,2]
输出：[1,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  if (!root) {
    return result
  }
  const stack = []

  // 1. 先把所有的左节点压到stack中
  while (root) {
    stack.push(root)
    root = root.left
  }

  while (stack.length) {
    let node = stack.pop()
    // 放结果
    result.push(node.val)
    // 处理右节点
    node = node.right
    // 继续放所有的左节点02.js
    while (node) {
      stack.push(node)
      node = node.left
    }
  }
  return result
}

module.exports = inorderTraversal
