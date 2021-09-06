const widthOfBinaryTree = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([3, 1, 4, 3, null, 1, 5])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(4)
})

test('2', () => {
  const root = arrayToTreeNode([3, 3, null, 4, 2])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(3)
})

test('3', () => {
  const root = arrayToTreeNode([1])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(1)
})
