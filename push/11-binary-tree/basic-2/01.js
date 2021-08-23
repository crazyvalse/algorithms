const { arrayToTreeNode, treeNodeToArray } = require('../utils')

// 中序
class Solution {
  inorderTraversal(root) {
    const result = []
    const [WHITE, GRAY] = [0, 1]
    const stack = [[WHITE, root]]
    while (stack.length) {
      const [c, n] = stack.pop()
      if (!n) {
        continue
      }
      if (c === WHITE) {
        stack.push([WHITE, n.right])
        stack.push([GRAY, n])
        stack.push([WHITE, n.left])
      } else {
        result.push(n.val)
      }
    }
    return result
  }

  traverse(n) {
    if (!n) {
      return
    }
    this.traverse(n.left)
    console.info(n.val)
    this.traverse(n.right)
  }
}
const root = arrayToTreeNode([0, 1, 2, 3, 4, 5, 6, 7, 8])
const s = new Solution()
console.info(s.traverse(root))
console.info('----------')
console.info(s.inorderTraversal(root))
