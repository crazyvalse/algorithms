const flatten = require('./01')
const { arrayToTreeNode1, treeNodeToArray } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode1([1, 2, 5, 3, 4, null, 6])
  const a = treeNodeToArray(flatten(root))
  expect(a).toEqual([1, null, 2, null, 3, null, 4, null, 5, null, 6])
})

test('2', () => {
  const root = arrayToTreeNode1([])
  const a = treeNodeToArray(flatten(root))
  expect(a).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode1([0])
  const a = treeNodeToArray(flatten(root))
  expect(a).toEqual([0])
})
