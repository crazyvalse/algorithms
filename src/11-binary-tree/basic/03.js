/*
反转二叉树

     4
   /   \
  2     7
 / \   / \
1   3 6   9

     4
   /   \
  7     2
 / \   / \
9   6 3   1
https://labuladong.gitee.io/algo/2/18/20/
 */
// 反转二叉树
// 其实就是把每个节点的左右节点进行交换
const reverse = function (node) {
  if (!node) {
    return
  }
  const tmp = node.left
  node.left = node.right
  node.right = tmp

  reverse(node.left)
  reverse(node.right)
}

module.exports = reverse
