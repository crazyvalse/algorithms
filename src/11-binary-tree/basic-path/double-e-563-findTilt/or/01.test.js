const findTilt = require('./01')
const { arrayToTreeNode, treeNodeToArray, TreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, 2, 3])
  expect(findTilt(root)).toEqual(1)
})

test('2', () => {
  const root = arrayToTreeNode([4, 2, 9, 3, 5, null, 7])
  expect(findTilt(root)).toEqual(15)
})

test('3', () => {
  const root = arrayToTreeNode([21, 7, 14, 1, 1, 2, 2, 3, 3])
  expect(findTilt(root)).toEqual(9)
})
