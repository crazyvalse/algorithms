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
    return null
  }
  const nodes = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      continue
    }
    const node = new TreeNode(array[i])
    nodes.push(node)
    // 从1开始查找
    if (i > 0) {
      // 找到 parent 以及是哪个节点
      const parentIndex = (i - 1) >>> 1
      // 判断是哪个节点
      const isRight = (i - 1) % 2
      nodes[parentIndex][isRight ? 'right' : 'left'] = node
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
    if (top) {
      result.push(top.val)
      /*
      左节点计算的条件：
      1. 左节点有值
      2. 左节点无值，但是右节点有值

      右节点计算条件：
      2. 右节点有值
       */
      if (top.left || top.right) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    } else {
      result.push(top)
    }
  }
  return result
}

// const array = [1, null, 2, 3] // [0, 1, 2, 3, 4]
// const root = arrayToTreeNode(array)
// const newArray = treeNodeToArray(root)
// console.info(newArray)

module.exports = {
  TreeNode,
  arrayToTreeNode,
  treeNodeToArray
}
