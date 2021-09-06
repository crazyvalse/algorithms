const { TreeNode, isBalanced, height } = require('./01')

test('height 1', () => {
  const p5 = TreeNode(7, null, null)
  const p4 = TreeNode(15, null, null)
  const p3 = TreeNode(20, p4, p5)
  const p2 = TreeNode(9, null, null)
  const p1 = TreeNode(3, p2, p3)

  expect(height(p1)).toBe(3)

})
