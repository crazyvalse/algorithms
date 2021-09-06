const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')
/*
863. 二叉树中所有距离为 K 的结点

给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。

返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。


示例 1：

输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
输出：[7,4,1]
解释：
所求结点为与目标结点（值为 5）距离为 2 的结点，
值分别为 7，4，以及 1


注意，输入的 "root" 和 "target" 实际上是树上的结点。
上面的输入仅仅是对这些对象进行了序列化描述。


提示：

给定的树是非空的。
树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
目标结点 target 是树上的结点。
0 <= K <= 1000.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. 先记录所有节点的父节点
 * 2. 以target为中心遍历三个方向 上 左 右
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const parents = getParents(root)
  const result = []
  // 以 target 为中心，遍历上 左 右
  // 不能走回头路
  const walk = function (root, from, deep) {
    if (!root) {
      return
    }
    if (deep === k) {
      result.push(root.val)
      return
    }
    if (root.left && root.left !== from) {
      walk(root.left, root, deep + 1)
    }
    if (root.right && root.right !== from) {
      walk(root.right, root, deep + 1)
    }
    // 上
    const parent = parents[root.val]
    if (parent && parent !== from) {
      walk(parent, root, deep + 1)
    }
  }
  walk(target, null, 0)
  return result
}

function getParents(root) {
  const map = {}
  const walk = function (root) {
    if (root.left) {
      map[root.left.val] = root
      walk(root.left)
    }
    if (root.right) {
      map[root.right.val] = root
      walk(root.right)
    }
  }
  walk(root)
  return map
}

module.exports = distanceK
