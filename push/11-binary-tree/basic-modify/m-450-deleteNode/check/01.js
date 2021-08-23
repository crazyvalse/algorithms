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
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
 * 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 *
 * 1. 找到节点
 * 2. 删除
 *
 * 递归
 * 1. 返回值： 返回删除后的节点
 * return root
 * 2. 递归过程
 * 1. 判断当前节点是不是 target
 *  - 不是：判断大小，然后去不同的树
 *  - 是：
 *    - 子节点： return null
 *    - 只包含一个节点： 返回 有节点的节点
 *    - 都包含：
 *      - 找到后继节点，并赋值
 *      - 删除后继节点
 * 3. 参数 root
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null
  }
  // 说明是在左边
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    // 找到了节点
    if (!root.left && !root.right) {
      root = null
    } else if (root.right) {
      // 找到后继节点
      root.val = successor(root)
      root.right = deleteNode(root.right, root.val)
    } else {
      root.val = pre(root)
      root.left = deleteNode(root.left, root.val)
    }
  }

  return root
}

function pre(root) {
  root = root.left
  while (root.right) {
    root = root.right
  }
  return root.val
}

function successor(root) {
  root = root.right
  while (root.left) {
    root = root.left
  }
  return root.val
}

module.exports = deleteNode
