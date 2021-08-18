/*
1008. 前序遍历构造二叉搜索树

返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。

(回想一下，二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于 node.left 的任何后代，值总 < node.val，而 node.right 的任何后代，值总 > node.val。此外，前序遍历首先显示节点 node 的值，然后遍历 node.left，接着遍历 node.right。）

题目保证，对于给定的测试用例，总能找到满足要求的二叉搜索树。

示例：

输入：[8,5,1,7,10,12]
输出：[8,5,10,1,7,null,12]


提示：

1 <= preorder.length <= 100
1 <= preorder[i] <= 10^8
preorder 中的值互不相同


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} a
 * @return {TreeNode}
 */
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} a
 * @return {TreeNode}
 */
var bstFromPreorder = function (a) {
  if (a.length < 0) {
    return null
  }
  const walk = function (l, r) {
    if (l > r) {
      return null
    }
    const root = new TreeNode(a[l])
    const pivot = findPivot(a, l, r)
    root.left = walk(l + 1, pivot)
    root.right = walk(pivot + 1, r)
    return root
  }
  // 找到第一个大于 a[l] 的

  return walk(0, a.length - 1)
}

function findPivot(a, l, r) {
  const t = l
  let pivot = l
  while (l <= r) {
    if (a[l] < a[t]) {
      pivot = l
    }
    l++
  }
  return pivot
}

module.exports = bstFromPreorder
