function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * 需要一个node的数组
 * 根据 index 找到它的父节点，以及是哪个子节点
 * @param array
 * @returns {TreeNode}
 */
function transfer(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return new TreeNode()
  }
  const nodes = []
  for (let i = 0; i < array.length; i++) {
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

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.info(transfer(array))

module.exports = {
  transfer,
  TreeNode
}
