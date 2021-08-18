const trimBST = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 0, 2])
  let nr = trimBST(root, 1, 2)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, null, 2])
})

test('2', () => {
  const root = arrayToTreeNode([3, 0, 4, null, 2, null, null, 1])
  trimBST(root, 1, 3)
  const a = treeNodeToArray(root)
  console.info(a)
  expect(a).toEqual([3, 2, null, 1])
})

test('3', () => {
  const root = arrayToTreeNode([1])
  const n = trimBST(root, 1, 2)
  const a = treeNodeToArray(n)
  expect(a).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode([1, null, 2])
  let nr = trimBST(root, 1, 3)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([1, null, 2])
})

test('5', () => {
  const root = arrayToTreeNode([1, null, 2])
  let nr = trimBST(root, 2, 4)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([2])
})

test('6', () => {
  const root = arrayToTreeNode([2, 1, 3])
  let nr = trimBST(root, 3, 4)
  const a = treeNodeToArray(nr)
  expect(a).toEqual([3])
})
