class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = undefined
  }
}

class Tree {
  constructor(data) {
    const nodeList = []
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      // 获得node实例
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 记录层级
        let currentlayer = Math.floor(Math.log2(i + 1))
        // 记录当前层的起始点
        let currentLayerFirstNode = Math.pow(2, currentlayer) - 1
        // 记录上一层的起始点
        let upperLayerFirstNode = Math.pow(2, currentlayer - 1) - 1
        // 找到当前节点的父节点
        let parent = nodeList[upperLayerFirstNode + Math.floor((i - currentLayerFirstNode) / 2)]
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList.shift()
    nodeList.length = 0
    return root
  }
}
