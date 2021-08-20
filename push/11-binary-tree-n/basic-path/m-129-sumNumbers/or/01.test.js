const sumNumbers = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 2, 3])
  const a = sumNumbers(root)
  expect(a).toEqual(25)
})

test('2', () => {
  const root = arrayToTreeNode([4, 9, 0, 5, 1])
  expect(sumNumbers(root)).toEqual(1026)
})
