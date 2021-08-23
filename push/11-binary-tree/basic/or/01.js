3 /*
二叉查找树 BST
 */

function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  return this.data
}

function BST() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
}

// 插入
function insert(data) {
  const n = new Node(data, null, null)
  if (this.root === null) {
    this.root = n
    return
  }
  let current = this.root
  let parent
  while (true) {
    parent = current
    if (data < current.data) {
      current = current.left
      if (current === null) {
        parent.left = n
        break
      }
    } else {
      current = current.right
      if (current === null) {
        parent.right = n
        break
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left)
    console.info(node.show())
    inOrder(node.right)
  }
}

function preOrder(node) {
  if (node !== null) {
    console.info(node.show())
    preOrder(node.left)
    preOrder(node.right)
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    console.info(node.show())
  }
}

function getMin(node) {
  let current = node.root
  while (current.left !== null) {
    current = current.left
  }
  return current.data
}

function getMax(node) {
  let current = node.root
  while (current.right !== null) {
    current = current.right
  }
  return current.data
}

const nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.info('----------')
inOrder(nums.root)
console.info('----------')
preOrder(nums.root)
console.info('----------')
postOrder(nums.root)
console.info('----------')
console.info(getMin(nums))
console.info('----------')
console.info(getMax(nums))
