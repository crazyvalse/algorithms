const pruneTree = require('./01')
const { arrayToTreeNode, arrayToTreeNode1, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode1([1, null, 0, 0, 1])
  const nr = pruneTree(root)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, null, 0, null, 1])
})

test('2', () => {
  const root = arrayToTreeNode1([1, 0, 1, 0, 0, 0, 1])
  const nr = pruneTree(root)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, null, 1, null, 1])
})

test('3', () => {
  const root = arrayToTreeNode1([1, 1, 0, 1, 1, 0, 1, 0])
  const nr = pruneTree(root)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, 1, 0, 1, 1, null, 1])
})

test('4', () => {
  const root = arrayToTreeNode1([0, null, 0, 0, 0])
  const nr = pruneTree(root)
  debugger
  const a = treeNodeToArray(nr)
  expect(a).toEqual([])
})
