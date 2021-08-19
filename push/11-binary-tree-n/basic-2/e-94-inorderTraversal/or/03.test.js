const inorderTraversal = require('./03')
const { arrayToTreeNode } = require('../../utils')

test('1', () => {
  const root = arrayToTreeNode([1, null, 2, 3])
  expect(inorderTraversal(root)).toEqual([1, 3, 2])
})

test('2', () => {
  const root = arrayToTreeNode([])
  expect(inorderTraversal(root)).toEqual([])
})

test('3', () => {
  const root = arrayToTreeNode([1])
  expect(inorderTraversal(root)).toEqual([1])
})

test('4', () => {
  const root = arrayToTreeNode([1, 2])
  expect(inorderTraversal(root)).toEqual([2, 1])
})

test('5', () => {
  const root = arrayToTreeNode([1, null, 2])
  expect(inorderTraversal(root)).toEqual([1, 2])
})
