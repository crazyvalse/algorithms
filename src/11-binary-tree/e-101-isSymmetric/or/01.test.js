const isSymmetric = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 2, 2, 3, 4, 4, 3])
  const result = isSymmetric(root)
  expect(result).toEqual(true)
})

test('2', () => {
  const root = arrayToTreeNode([1, 2, 2, null, 3, null, 3])
  const result = isSymmetric(root)
  expect(result).toEqual(false)
})
