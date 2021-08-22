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
 * 1. 处理数组
 * 2. 添加下一代
 * 3. 判断是不是对称的
 * @param root
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const queue = [root]
  while (queue.length) {
    // 1. 截取需要处理的数组
    const a = queue.slice()
    queue.length = 0
    // 2. 把数组下一代添加到queue中
    for (let i = 0; i < a.length; i++) {
      if (a[i]) {
        queue.push(a[i].left)
        queue.push(a[i].right)
      }
    }
    // 3. 判断是否是对称的
    if (!check(a)) {
      return false
    }
  }
  return true
}

function check(a) {
  let [l, r] = [0, a.length - 1]
  while (l < r) {
    // 1. 都为null
    // 2. 都不为null，并且值相等
    if ((a[l] === null && a[r] === null) || (a[l] && a[r] && a[l].val === a[r].val)) {
      l++
      r--
      continue
    }
    return false
  }
  return true
}

module.exports = isSymmetric
