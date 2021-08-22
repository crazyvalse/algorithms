const invertTree = require('./02')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([4, 2, 7, 1, 3, 6, 9])
  const result = treeNodeToArray(invertTree(root))
  console.info(result)
  expect(result).toEqual([4, 7, 2, 9, 6, 3, 1])
})
