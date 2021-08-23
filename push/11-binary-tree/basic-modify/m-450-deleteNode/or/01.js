const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
450. 删除二叉搜索树中的节点

给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。
说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

示例:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。

    5
   / \
  2   6
   \   \
    4   7


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
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
 * 如果 key > root.val
 *  - 说明节点在右子树： root.right = deleteNode(root.right, key)
 * 如果 key < root.val
 *  - 说明节点在左子树： root.left = deleteNode(root.left, key)
 * 如果 key === root.val 说明得删除这个节点
 *  - 如果该节点是叶子节点，直接删除它： root = null
 *  - 有右节点，则用它的后继节点的值替代 root.val = successor.val 直接删除后继节点
 *  - 有左节点一样
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return null
  }
  // 继续看右节点
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
    // 继续看左节点
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    // 左右节点都没有的话，直接返回 null，换句话说就是删除这个节点
    if (!root.left && !root.right) {
      root = null
      // 存在右节点的时候，找到下一个，给当前的root赋值，并删除后继节点
    } else if (root.right !== null) {
      root.val = successor(root)
      root.right = deleteNode(root.right, root.val)
      // 反之亦然
    } else {
      root.val = predecessor(root)
      root.left = deleteNode(root.left, root.val)
    }
  }
  return root
}

/**
 * 找到下一个节点
 * @param root
 */
function successor(root) {
  // 应该是右节点最靠前的那一个
  root = root.right
  while (root.left) {
    root = root.left
  }
  return root.val
}

/**
 * 找到前一个节点
 * @param root
 */
function predecessor(root) {
  root = root.left
  while (root.right) {
    root = root.right
  }
  return root.val
}

module.exports = deleteNode
