const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
662. 二叉树最大宽度
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:

输入:

           1
         /   \
        3     2
       / \     \
      5   3     9

输出: 4
解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
示例 2:

输入:

          1
         /
        3
       / \
      5   3

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
示例 3:

输入:

          1
         / \
        3   2
       /
      5

输出: 2
解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
示例 4:

输入:

          1
         / \
        2   3
       /     \
      4       7
     /         \
    8           15
输出: 8
解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。
注意: 答案在32位有符号整数的表示范围内。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-width-of-binary-tree
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
 * @param {TreeNode} r
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let [w, l, r] = [0, 0, 0]
  const queue = [[root, 1n]]
  while (queue.length) {
    let length = queue.length
    // XXX 最左边的就是第一个，非常精髓的方法
    l = queue[0][1]
    // 接下来只需要计算r的位置
    while (length-- > 0) {
      const [node, num] = queue.shift()
      r = num
      if (node) {
        // 不需要处理 null，非null的n是正确的
        if (node.left) {
          queue.push([node.left, 2n * num])
        }
        if (node.right) {
          queue.push([node.right, 2n * num + 1n])
        }
      }
    }
    if (r - l + 1n > w) {
      w = r - l + 1n
    }
  }
  return Number(w)
}

module.exports = widthOfBinaryTree
