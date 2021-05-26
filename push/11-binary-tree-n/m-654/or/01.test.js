const constructMaximumBinaryTree = require('./01')
const { treeNodeToArray } = require('../../utils')
test('1', () => {
  const root = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
  const a = treeNodeToArray(root)
  expect(a).toEqual([6, 3, 5, null, 2, 0, null, null, 1])
})
