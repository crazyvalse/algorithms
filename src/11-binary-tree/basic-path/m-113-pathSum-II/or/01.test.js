const pathSum = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  const a = pathSum(root, 22)
  console.info(a)
  expect(a).toEqual([
    [5, 4, 11, 2],
    [5, 8, 4, 5]
  ])
})

test('2', () => {
  const root = arrayToTreeNode([1, 2, 3])
  expect(pathSum(root, 5)).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode([1, 2])
  expect(pathSum(root, 0)).toEqual([])
})

test('4', () => {
  const root = arrayToTreeNode([-2, null, -3])
  expect(pathSum(root, -5)).toEqual([[-2, -3]])
})
