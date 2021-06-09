/*
实现二叉树
二叉查找树
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
  this.find = find
}

function insert(data) {
  var n = new Node(data, null, null)
  if (this.root === null) {
    this.root = n
  } else {
    var current = this.root
    var parent
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
}

// 中序遍历
const list = []
function inOrder(node) {
  if (!(node === null)) {
    inOrder(node.left)
    list.push(node.show())
    inOrder(node.right)
  }
}

const nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
nums.insert(35)

inOrder(nums.root)
// console.info(list)

const list2 = []
function preOrder(node) {
  if (!(node === null)) {
    list2.push(node.show())
    preOrder(node.left)
    preOrder(node.right)
  }
}

preOrder(nums.root)
console.info(list2)

function getMin(root) {
  let current = root
  while (!(current.left === null)) {
    current = current.left
  }
  return current.data
}

function getMax(root) {
  let current = root
  while (!(current.right === null)) {
    current = current.right
  }
  return current.data
}

console.info(getMin(nums.root))
console.info(getMax(nums.root))

function find(data) {
  let current = this.root
  while (current !== null) {
    if (current.data === data) {
      return current
    } else if (data < current.data) {
      current = current.left
    } else {
      current = current.right
    }
  }
  return null
}

console.info(nums.find(37))
