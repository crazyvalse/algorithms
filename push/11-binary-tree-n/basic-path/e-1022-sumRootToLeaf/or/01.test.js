const sumNumbers = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 0, 1, 0, 1, 0, 1])
  const a = sumNumbers(root)
  expect(a).toEqual(22)
})

test('2', () => {
  const root = arrayToTreeNode([0])
  expect(sumNumbers(root)).toEqual(0)
})

test('3', () => {
  const root = arrayToTreeNode([1])
  expect(sumNumbers(root)).toEqual(1)
})

test('4', () => {
  const root = arrayToTreeNode([1, 1])
  expect(sumNumbers(root)).toEqual(3)
})
