const { levelOrder, TreeNode } = require('./02')

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
  expect(levelOrder(root)).toEqual([[15, 7], [9, 20], [3]])
})

test('2', () => {
  const root = new TreeNode(3)
  expect(levelOrder(root)).toEqual([[3]])
})
