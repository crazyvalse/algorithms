/*
652. 寻找重复的子树
给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
下面是两个重复的子树：

      2
     /
    4
和

    4
因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * 思路就是
 * 难点是 如何停止呢
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let result = []
  const map = {}
  const walk = function (root) {
    if (!root) {
      return '#'
    }
    const key = root.val + ',' + walk(root.left) + ',' + walk(root.right)
    map[key] = map[key] || 0
    map[key]++
    // 只有等于2的时候才添加，避免重复添加的问题
    if (map[key] === 2) {
      result.push(root)
    }
    return key
  }
  walk(root)
  return result
}

module.exports = findDuplicateSubtrees
