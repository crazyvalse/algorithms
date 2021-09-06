const connect = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = arrayToTreeNode([1, 2, 3, 4, 5, 6, 7])
  connect(root)
  console.info(root)
})
