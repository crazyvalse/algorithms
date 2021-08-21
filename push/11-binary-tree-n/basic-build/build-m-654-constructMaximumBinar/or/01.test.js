const constructMaximumBinaryTree = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
  const array = treeNodeToArray(root)
  expect(array).toEqual([6, 3, 5, null, 2, 0, null, null, 1])
})

test('2', () => {
  const root = constructMaximumBinaryTree([3, 2, 1])
  const array = treeNodeToArray(root)
  expect(array).toEqual([3, null, 2, null, 1])
})
