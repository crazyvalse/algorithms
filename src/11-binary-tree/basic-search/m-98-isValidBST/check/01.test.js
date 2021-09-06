const isValidBST = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = arrayToTreeNode([5, 1, 4, null, null, 3, 6])
  const result = isValidBST(root)
  expect(result).toEqual(false)
})

test('2', () => {
  const root = arrayToTreeNode([2, 1, 3])
  const result = isValidBST(root)
  expect(result).toEqual(true)
})

test('3', () => {
  const root = arrayToTreeNode([2, 2, 2])
  const result = isValidBST(root)
  expect(result).toEqual(false)
})
