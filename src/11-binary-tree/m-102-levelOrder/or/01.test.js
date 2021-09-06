const { levelOrder } = require('./01')
const { treeNodeToArray, arrayToTreeNode } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([3, 9, 20, null, null, 15, 7])
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
})

test('2', () => {
  const root = arrayToTreeNode([3])
  expect(levelOrder(root)).toEqual([[3]])
})
