const diameterOfBinaryTree = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 2, 3, 4, 5])
  const result = diameterOfBinaryTree(root)
  expect(result).toEqual(3)
})

// test('2', () => {
//   const root = arrayToTreeNode([1, 2, 3, 4, 5])
//   const result = diameterOfBinaryTree(root)
//   expect(result).toEqual(3)
// })
