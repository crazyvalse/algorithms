const removeLeafNodes = require('./01')
const { arrayToTreeNode, arrayToTreeNode1, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode1([1, 2, 3, 2, null, 2, 4])
  const nr = removeLeafNodes(root, 2)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, null, 3, null, 4])
})

test('2', () => {
  const root = arrayToTreeNode1([1, 3, 3, 3, 2])
  const nr = removeLeafNodes(root, 3)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, 3, null, null, 2])
})

test('3', () => {
  const root = arrayToTreeNode1([1, 2, null, 2, null, 2])
  const nr = removeLeafNodes(root, 2)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode1([1, 1, 1])
  const nr = removeLeafNodes(root, 1)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([])
})

test('5', () => {
  const root = arrayToTreeNode1([1, 2, 3])
  const nr = removeLeafNodes(root, 1)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, 2, 3])
})
