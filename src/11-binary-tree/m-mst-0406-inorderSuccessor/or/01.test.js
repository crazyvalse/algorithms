const inorderSuccessor = require('./01')
const { treeNodeToArray, arrayToTreeNode } = require('../../utils')
test('1', () => {
  const root = arrayToTreeNode([2, 1, 3])
  const target = findTarget(root, 1)

  const a = inorderSuccessor(root, target)
  expect(a.val).toEqual(2)
})

test('2', () => {
  const root = arrayToTreeNode([5, 3, 6, 2, 4, null, null, 1])
  const target = findTarget(root, 6)

  const a = inorderSuccessor(root, target)
  expect(a).toEqual(null)
})

function findTarget(root, target) {
  if (!root) {
    return null
  }
  if (root.val === target) {
    return root
  }

  return findTarget(root.left, target) || findTarget(root.right, target)
}
