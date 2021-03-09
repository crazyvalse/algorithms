const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

for (let i = 0, len = array.length; i < len; i++) {
  if (i > 0) {
    // 计算当前节点属于那一层
    let n = Math.floor(Math.sqrt(i + 1))
    // 记录当前层的起始点
    let q = Math.pow(2, n) - 1
    // 记录上一层的起始点
    let p = Math.pow(2, n - 1) - 1
    // 找到当前节点的父节点
    console.info(n, q, p)
  }
}
