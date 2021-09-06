const convertBST = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])

  const newRoot = convertBST(root)
  const a = treeNodeToArray(newRoot)
  expect(a).toEqual([30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8])
})
