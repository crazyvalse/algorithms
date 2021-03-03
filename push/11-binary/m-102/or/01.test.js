const { levelOrder, TreeNode } = require('./01')

test('1', () => {
  const root = new TreeNode(3)
  root.left = new TreeNode(9)
  const t2 = new TreeNode(20)
  const t3 = new TreeNode(15)
  const t4 = new TreeNode(7)
  t2.left = t3
  t2.right = t4
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
})

test('2', () => {
  const root = new TreeNode(3)
  expect(levelOrder(root)).toEqual([[3]])
})
