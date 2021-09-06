const findDuplicateSubtrees = require('./01')
const { arrayToTreeNode1, treeNodeToArray } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode1([1, 2, 3, 4, null, 2, 4, null, null, 4])
  const a = findDuplicateSubtrees(root)
  console.info(a)
})
