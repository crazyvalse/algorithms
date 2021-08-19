const longestZigZag = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')
test('1', () => {
  const root = arrayToTreeNode([1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1, null, 1])
  const result = longestZigZag(root)
  expect(result).toEqual(3)
})

test('2', () => {
  const root = arrayToTreeNode([1, 1, 1, null, 1, null, null, 1, 1, null, 1])
  const result = longestZigZag(root)
  expect(result).toEqual(4)
})

test('3', () => {
  const root = arrayToTreeNode([1])
  const result = longestZigZag(root)
  expect(result).toEqual(0)
})
