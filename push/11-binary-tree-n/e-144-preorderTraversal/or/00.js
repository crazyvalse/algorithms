/*
144. 二叉树的前序遍历

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。



示例 1：


输入：root = [1,null,2,3]
输出：[1,2,3]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[1,2]
示例 5：


输入：root = [1,null,2]
输出：[1,2]


提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100


进阶：递归算法很简单，你可以通过迭代算法完成吗？

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
 * 前序顺序是 中左右
 * 压栈顺序是 右左中
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = []
  const stack = []
  if (root) {
    stack.push(root)
  }

  while (stack.length) {
    const node = stack.pop()
    // 如果为null，说明需要处理下一个
    if (!node) {
      result.push(stack.pop().val)
      continue
    }

    // 右
    if (node.right) {
      stack.push(node.right)
    }
    // 左
    if (node.left) {
      stack.push(node.left)
    }
    stack.push(node) // 中
    stack.push(null)
  }

  return result
}

module.exports = preorderTraversal
