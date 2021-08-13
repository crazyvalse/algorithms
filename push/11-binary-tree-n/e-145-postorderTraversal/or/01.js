/*
145. 二叉树的后序遍历

给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
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
 *冷
 * 为什么会喜欢你？
 * 你坐在那里分享着知识，自信而笃定。那个从容的模样，异常迷人呢！
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = []
  const walk = function (n) {
    if (!n) {
      return
    }
    walk(n.left)
    walk(n.right)
    result.push(n.val)
  }
  walk(root)
  console.info(result)
  return result
}

module.exports = postorderTraversal
