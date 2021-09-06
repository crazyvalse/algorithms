const insertIntoBST = require('./03')
const { arrayToTreeNode1, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode1([4, 2, 7, 1, 3])
  const a = treeNodeToArray(insertIntoBST(root, 5))
  expect(a).toEqual([4, 2, 7, 1, 3, 5])
})

test('2', () => {
  const root = arrayToTreeNode1([40, 20, 60, 10, 30, 50, 70])
  const a = treeNodeToArray(insertIntoBST(root, 25))
  expect(a).toEqual([40, 20, 60, 10, 30, 50, 70, null, null, 25])
})

test('3', () => {
  const root = arrayToTreeNode1([4, 2, 7, 1, 3, null, null, null, null, null, null])
  const a = treeNodeToArray(insertIntoBST(root, 5))
  expect(a).toEqual([4, 2, 7, 1, 3, 5])
})

test('4', () => {
  const root = arrayToTreeNode1([])
  const a = treeNodeToArray(insertIntoBST(root, 5))
  expect(a).toEqual([5])
})
