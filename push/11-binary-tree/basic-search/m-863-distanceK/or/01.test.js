const distanceK = require('./01')
const { arrayToTreeNode, treeNodeToArray } = require('../../../utils')

test('1', () => {
  const root = arrayToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const target = findTarget(root, 5)
  let a = distanceK(root, target, 2)
  expect(a).toEqual([7, 4, 1])
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
