const preorderTraversal = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, null, 2, 3])
  expect(preorderTraversal(root)).toEqual([1, 2, 3])
})

test('2', () => {
  const root = arrayToTreeNode([])
  expect(preorderTraversal(root)).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode([1])
  expect(preorderTraversal(root)).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode([1, 2])
  expect(preorderTraversal(root)).toEqual([1, 2])
})

test('5', () => {
  const root = arrayToTreeNode([1, null, 2])
  expect(preorderTraversal(root)).toEqual([1, 2])
})
