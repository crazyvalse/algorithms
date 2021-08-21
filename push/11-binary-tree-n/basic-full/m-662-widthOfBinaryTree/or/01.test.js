const widthOfBinaryTree = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 3, 2, 5, 3, null, 9])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(4)
})

test('2', () => {
  const root = arrayToTreeNode([1, 3, null, 5, 3])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(2)
})

test('3', () => {
  const root = arrayToTreeNode([1, 3, 2, 5])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(2)
})

test('4', () => {
  const root = arrayToTreeNode([1, 2, 3, 4, null, null, 7, 8, null, null, null, null, null, null, 15])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(8)
})

test('5', () => {
  const root = arrayToTreeNode([1])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(1)
})

test('6', () => {
  const root = arrayToTreeNode([1])
  const result = widthOfBinaryTree(root)
  expect(result).toEqual(1)
})
