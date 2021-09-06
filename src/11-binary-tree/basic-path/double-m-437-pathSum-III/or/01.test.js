const pathSum = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1])
  expect(pathSum(root, 22)).toEqual(3)
})

test('2', () => {
  const root = arrayToTreeNode([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1])
  expect(pathSum(root, 8)).toEqual(3)
})

test('3', () => {
  const root = arrayToTreeNode([1, -2, -3, 1, 3, -2, null, -1])
  expect(pathSum(root, -1)).toEqual(4)
})
