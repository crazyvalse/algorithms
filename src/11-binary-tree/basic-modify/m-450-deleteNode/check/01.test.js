const deleteNode = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([5, 3, 6, 2, 4, null, 7])
  let nr = deleteNode(root, 3)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([5, 4, 6, 2, null, null, 7])
})

test('2', () => {
  const root = arrayToTreeNode([])
  deleteNode(root, 0)
  const a = treeNodeToArray(root)
  expect(a).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode([0])
  const n = deleteNode(root, 0)
  const a = treeNodeToArray(n)
  expect(a).toEqual([])
})

test('4', () => {
  const root = arrayToTreeNode([5, 3, 6, 2, 4, null, 7])
  let nr = deleteNode(root, 7)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([5, 3, 6, 2, 4])
})
