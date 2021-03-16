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
/**
 * visited数组，访问过就 visited = true 找到下一个，继续查找
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const length = isConnected.length
  const visited = new Array(length).fill(false)
  let result = 0

  //遍历visited数组
  function main() {
    for (let c = 0; c < length; c++) {
      if (!visited[c]) {
        result++
        visited[c] = true
        walk(c)
      }
    }
  }
  // 遍历上下左右
  /**
   * 把上下左右所有的点都变成0
   * 1. 出口
   * 2. 遍历过程
   */
  function walk(r) {
    for (let c = 0; c < length; c++) {
      if (isConnected[r][c] === 1 && !visited[c]) {
        visited[c] = true
        walk(c)
      }
    }
  }

  main()
  return result
}

module.exports = findCircleNum
