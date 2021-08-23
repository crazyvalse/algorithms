const preorderTraversal = require('./02')
const { arrayToTreeNode1, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode1([1, null, 2, 3])
  expect(preorderTraversal(root)).toEqual([1, 2, 3])
})

test('2', () => {
  const root = arrayToTreeNode1([])
  expect(preorderTraversal(root)).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode1([1])
  expect(preorderTraversal(root)).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode1([1, 2])
  expect(preorderTraversal(root)).toEqual([1, 2])
})

test('5', () => {
  const root = arrayToTreeNode1([1, null, 2])
  expect(preorderTraversal(root)).toEqual([1, 2])
})
