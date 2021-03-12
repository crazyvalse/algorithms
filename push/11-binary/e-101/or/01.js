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
 * - 如果 (left === null && right === null) || left !== right
 *    return false
 * 递归四要素
 *
 * 1. 临界点
 * root === null
 * if(left === null && right ===null){
 *   return true
 * }
 *
 * 2. 返回值
 * return isSymmetric(left) && isSymmetric(right)
 * 3. 表达值: 判断当前节点下的 左右节点是否相等
 * 4. 参数 root
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  // left.left === right.right left.right === right.left
  const walk = function (left, right) {
    if (!left && !right) {
      return true
    }

    if (!left || !right) {
      return false
    }

    return left.val !== right.val && walk(left.left, right.right) && walk(left.right, right.left)
  }

  return walk(root.left, root.right)
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const t0 = new TreeNode(1)
const t1 = new TreeNode(2)
const t2 = new TreeNode(2)
t0.left = t1
t0.right = t2

const t3 = new TreeNode(3)
const t4 = new TreeNode(4)

t1.left = t3
t1.right = t4
const t5 = new TreeNode(4)
const t6 = new TreeNode(3)

t2.left = t5
t2.right = t6

console.info(isSymmetric(t0))
console.info(t0)
