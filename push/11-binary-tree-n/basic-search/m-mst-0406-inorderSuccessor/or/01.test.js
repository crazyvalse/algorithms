const inorderSuccessor = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([2, 1, 3])
  const target = findTarget(root, 1)
  const result = inorderSuccessor(root, target)
  expect(result.val).toEqual(2)
})

test('2', () => {
  const root = arrayToTreeNode([5, 3, 6, 2, 4, null, null, 1])
  const target = findTarget(root, 6)
  const result = inorderSuccessor(root, target)
  expect(result).toEqual(null)
})

function findTarget(root, target) {
  if (!root) {
    return null
  }
  const walk = function (root) {
    if (root.val === target || !root) {
      return root
    }
    return walk(root.left) || walk(root.right)
  }

  return walk(root)
}
