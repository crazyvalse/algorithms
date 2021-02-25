/*
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var mirrorTree = function () {
  this.root = null
  this.insert = insert
}
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
  this.show = function () {
    return this.val
  }
}

/**
 * 1. 判断 root是否为空
 *  - 是的话 就把新n设为root
 *  - 不是的话 就查找节点 current.val < node.val 说明是在左边
 *
 * @param n
 */
function insert(n) {
  debugger
  const node = new TreeNode(n, null, null)
  if (this.root === null) {
    this.root = node
    return
  }
  let current = this.root

  while (true) {
    // 说明是左节点
    if (current.val < node.val) {
      // 判断左节点是否为空，是的话就赋值给他，不是的话就算了
      if (current.left === null) {
        current.left = node
        break
      }
      current = current.left
    } else {
      if (current.right === null) {
        current.right = node
        break
      }
      current = current.right
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    console.info(node.show())
    inOrder(node.left)
    inOrder(node.right)
  }
}


// [4,2,7,1,3,6,9]
const nums = new mirrorTree()
nums.insert(4)
nums.insert(2)
nums.insert(7)
nums.insert(1)
nums.insert(3)
nums.insert(6)
nums.insert(9)
// nums.insert(23)
// nums.insert(45)
// nums.insert(16)
// nums.insert(37)
// nums.insert(3)
// nums.insert(99)
// nums.insert(22)


console.info(nums.root)
