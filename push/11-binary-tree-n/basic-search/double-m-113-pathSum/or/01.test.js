const pathSum = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = arrayToTreeNode([1, 2, 3])
  const result = pathSum(root, 5)
  expect(result).toEqual([])
})

test('2', () => {
  const root = arrayToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  const result = pathSum(root, 22)
  expect(result).toEqual([
    [5, 4, 11, 2],
    [5, 8, 4, 5]
  ])
})

test('3', () => {
  const root = arrayToTreeNode([1, 2])
  const result = pathSum(root, 0)
  expect(result).toEqual([])
})

test('4', () => {
  const root = arrayToTreeNode([1, 2])
  const result = pathSum(root, 1)
  expect(result).toEqual([])
})

test('5', () => {
  const root = arrayToTreeNode([-2, null, -3])
  const result = pathSum(root, -5)
  expect(result).toEqual([[-2, -3]])
})
