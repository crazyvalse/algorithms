/*
101. 对称二叉树

给定一个二叉树，检查它是否是镜像对称的。



例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3


进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * 1. 判断左右节点是否相等
 *  - 都为null的时候，相等
 *  - 其中一个为null的时候 不相等
 *  - 值不相等的时候，不相等
 *  - 比较完当前的值，还需要比较后代
 *
 * @param root
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const walk = function (left, right) {
    if (left === null && right === null) {
      return true
    }
    if (!left || !right) {
      return false
    }
    return left.val === right.val && walk(left.left, right.right) && walk(left.right, right.left)
  }

  return walk(root.left, root.right)
}

module.exports = isSymmetric
