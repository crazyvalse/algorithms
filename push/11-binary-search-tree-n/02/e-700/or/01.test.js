const BST = require('./01')
const { arrayToTreeNode } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([4, 2, 7, 1, 3])
  expect(BST(root, 2)).toEqual(true)
})

test('2', () => {
  const root = arrayToTreeNode([4, 2, 7, 1, 3])
  expect(BST(root, 10)).toEqual(false)
})

test('3', () => {
  const root = arrayToTreeNode([4, 2, 7, 1, 3])
  expect(BST(root, 7)).toEqual(true)
})
