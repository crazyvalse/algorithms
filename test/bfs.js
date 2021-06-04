function TreeNode(value, left, right) {
  this.value = value || null
  this.left = left || null
  this.right = right || null
}

const t1 = new TreeNode(1)
const t2 = new TreeNode(2)
const t3 = new TreeNode(3)
const t4 = new TreeNode(4)
const t5 = new TreeNode(5)
const t6 = new TreeNode(6)

t1.left = t2
t1.right = t3
t2.left = t4
t2.right = t5
t3.left = t6

function BfS(root) {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    console.info(node.value)
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }
}

BfS(t2)
