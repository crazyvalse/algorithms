/*
543. 二叉树的直径
给定一棵二叉树，你需要计算它的直径长度。
一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \
      4   5
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。


注意：两结点之间的路径长度是以它们之间边的数目表示。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
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
 * 这条路径可能穿过也可能不穿过根结点。
 * 每个节点两种选择
 * - 当转折点
 * Max(max, ll + rl)
 * - 当过客
 * return Math.max(ll, rl) 不包括当前节点
 *
 * walk: 返回最长深度
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let result = 0
  const walk = function (root) {
    if (!root) {
      return 0
    }
    const l = walk(root.left)
    const r = walk(root.right)

    result = Math.max(result, l + r)

    return Math.max(l, r) + 1
  }
  walk(root, 0)
  return result
}

module.exports = diameterOfBinaryTree
