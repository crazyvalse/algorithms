const isValidBST = require('./01')
const { arrayToTreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([5, 1, 4, null, null, 3, 6])

  expect(isValidBST(root)).toEqual(false)
})

test('2', () => {
  const root = arrayToTreeNode([2, 1, 3])
  expect(isValidBST(root)).toEqual(true)
})

test('3', () => {
  const root = arrayToTreeNode([1, 1])
  expect(isValidBST(root)).toEqual(false)
})
