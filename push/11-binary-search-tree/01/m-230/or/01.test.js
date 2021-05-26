const { arrayToTreeNode, treeNodeToArray } = require('../../utils')
const kthSmallest = require('./01')

test('1', () => {
  const root = arrayToTreeNode([3, 1, 4, null, 2])
  expect(kthSmallest(root, 1)).toBe(1)
})

test('2', () => {
  const root = arrayToTreeNode([5, 3, 6, 2, 4, null, null, 1])
  expect(kthSmallest(root, 3)).toBe(3)
})
