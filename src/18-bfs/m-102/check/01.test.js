const { levelOrder, TreeNode } = require('./01')

test('1', () => {
  const root = new TreeNode(3)
  const t1 = new TreeNode(9)
  const t2 = new TreeNode(20)
  const t3 = new TreeNode(15)
  const t4 = new TreeNode(7)
  root.left = t1
  root.right = t2
  t2.left = t3
  t2.right = t4

  const a = levelOrder(root)
  expect(a).toEqual([[3], [9, 20], [15, 7]])
})

test('2', () => {
  const root = new TreeNode(3)
  expect(levelOrder(root)).toEqual([[3]])
})
