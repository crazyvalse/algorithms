const maxPathSum = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 2, 3])
  expect(maxPathSum(root)).toEqual(6)
})

test('2', () => {
  const root = arrayToTreeNode([-10, 9, 20, null, null, 15, 7])
  expect(maxPathSum(root)).toEqual(42)
})
