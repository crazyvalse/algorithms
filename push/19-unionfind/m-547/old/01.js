/*
547. 省份数量

有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

返回矩阵中 省份 的数量。

示例 1：
输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2

示例 2：
输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3

提示：

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
 */
function UnionFind(n) {
  this.parents = Array.from({ length: n }, (t, i) => i)
  this.counter = n
}

UnionFind.prototype.find = function (x) {
  while (this.parents[x] !== x) {
    this.parents[x] = this.parents[this.parents[x]]
    x = this.parents[x]
  }
  return this.parents[x]
}

UnionFind.prototype.union = function (x, y) {
  const xRoot = this.find(x)
  const yRoot = this.find(y)
  if (xRoot === yRoot) {
    return
  }

  this.parents[xRoot] = yRoot
  this.counter--
}

/**
 * 结果就是 counter
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const uf = new UnionFind(n)

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r === c || isConnected[r][c] !== 1) {
        continue
      }
      uf.union(r, c)
    }
  }
  return uf.counter
}

module.exports = findCircleNum
