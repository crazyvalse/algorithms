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
      nodes.push(null)
      continue
    }
    const node = new TreeNode(array[i])
    nodes.push(node)
    // 从1开始查找
    if (i > 0) {
      // 找到 parent 以及是哪个节点
      const parentIndex = (i - 1) >>> 1
      if (nodes[parentIndex]) {
        // 判断是哪个节点
        const isRight = (i - 1) % 2
        nodes[parentIndex][isRight ? 'right' : 'left'] = node
      }
    }
  }
  return nodes[0]
}

function arrayToTreeNode1(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return null
  }
  const n = array.length
  const root = new TreeNode(array[0])
  const queue = [root]
  let i = 1
  while (queue.length && i < n) {
    const root = queue.shift()

    if (array[i]) {
      root.left = new TreeNode(array[i])
      queue.push(root.left)
    }
    i++
    if (array[i]) {
      root.right = new TreeNode(array[i])
      queue.push(root.right)
    }
    i++
  }
  return root
}

function removeRestNull(result) {
  let [l, r, n] = [0, 0, result.length]
  while (r < n) {
    if (result[r] !== null) {
      l = r
    }
    r++
  }
  result.splice(l + 1)
}

// bfs
function treeNodeToArray(root) {
  if (!root) {
    return []
  }
  const result = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const root = queue.shift()
    if (root) {
      result.push(root.val)
      /*
      左节点计算的条件：
      1. 左节点有值
      2. 左节点无值，但是右节点有值

      右节点计算条件：
      2. 右节点有值
       */
      // if (root.left || root.right) {
      queue.push(root.left)
      // }
      // if (root.right) {
      queue.push(root.right)
      // }
    } else {
      result.push(root)
    }
  }
  removeRestNull(result)

  return result
}

// const array = [1, 2, null, 3] // [0, 1, 2, 3, 4]
// const root = arrayToTreeNode(array)
// const newArray = treeNodeToArray(root)
// console.info(newArray)

module.exports = {
  TreeNode,
  arrayToTreeNode,
  treeNodeToArray
}
