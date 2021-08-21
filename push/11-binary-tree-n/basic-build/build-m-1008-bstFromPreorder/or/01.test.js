const bstFromPreorder = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = bstFromPreorder([8, 5, 1, 7, 10, 12])
  const array = treeNodeToArray(root)
  expect(array).toEqual([8, 5, 10, 1, 7, null, 12])
})
