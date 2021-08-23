function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = null
}

/**
 * 需要一个node的数组
 * 根据 index 找到它的父节点，以及是哪个子节点
 * @param array
 * @returns {TreeNode}
 */
function arrayToTreeNode(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return new TreeNode()
  }
  const nodes = []
  for (let i = 0; i < array.length; i++) {
    const node = array[i] !== null ? new TreeNode(array[i]) : null
    nodes.push(node)
    // 从1开始查找
    if (i > 0) {
      // 找到 parent 以及是哪个节点
      const parentIndex = (i - 1) >>> 1
      // 判断是哪个节点
      const isRight = (i - 1) % 2
      if (nodes[parentIndex] !== null) {
        nodes[parentIndex][isRight ? 'right' : 'left'] = node
      }
    }
  }
  return nodes[0]
}

// bfs
function treeNodeToArray(node) {
  if (!node) {
    return []
  }
  const result = []
  const queue = []
  queue.push(node)
  while (queue.length) {
    const top = queue.shift()
    result.push(top === null ? null : top.val)
    if (top !== null && (top.left !== null || top.right !== null)) {
      queue.push(top.left)
      queue.push(top.right)
    }
  }
  return result
}

// const array = [0, 1, 2, 3, 4]
// const root = arrayToTreeNode(array)
// const newArray = treeNodeToArray(root)
// console.info(newArray)

module.exports = {
  TreeNode,
  arrayToTreeNode,
  treeNodeToArray
}
