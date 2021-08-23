const postorderTraversal = require('./02')
const { arrayToTreeNode, treeNodeToArray } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, null, 2, 3])
  expect(postorderTraversal(root)).toEqual([3, 2, 1])
})

test('2', () => {
  const root = arrayToTreeNode([])
  expect(postorderTraversal(root)).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode([1])
  expect(postorderTraversal(root)).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode([1, 2])
  expect(postorderTraversal(root)).toEqual([2, 1])
})

test('5', () => {
  const root = arrayToTreeNode([1, null, 2])
  expect(postorderTraversal(root)).toEqual([2, 1])
})

test('6', () => {
  const root = arrayToTreeNode([1, 2, 3, 4, 5, 6])
  expect(postorderTraversal(root)).toEqual([4, 5, 2, 6, 3, 1])
})
