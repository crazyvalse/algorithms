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
 * BFS
 * 思路就是queue中添加每一层中前后两个节点
 * 每次弹出两个进行比较
 * @param root
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  const queue = [root, root]
  while (queue.length) {
    const a = queue.shift()
    const b = queue.shift()

    // 都为null，说明相等，且不需要处理
    if (!a && !b) {
      continue
    }
    // 举例非true的情况
    // - 其中一个为null
    // - val 不相等
    if (!a || !b || a.val !== b.val) {
      return false
    }
    // 处理下一代
    // 对应的节点放在前后
    queue.push(a.left)
    queue.push(b.right)
    queue.push(a.right)
    queue.push(b.left)
  }
  return true
}

module.exports = isSymmetric
