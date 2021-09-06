const { arrayToTreeNode, treeNodeToArray } = require('../utils')
const reverse = require('./03')

test('1', () => {
  const root = arrayToTreeNode([4, 2, 7, 1, 3, 6, 9])
  reverse(root)
  const result = treeNodeToArray(root)
  expect(result).toEqual([4, 7, 2, 9, 6, 3, 1])
})
