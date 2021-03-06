/*
64. 最小路径和

给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。

示例 1：
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

示例 2：
输入：grid = [[1,2,3],[4,5,6]]
输出：12
提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100

 */
/**
 * f[r][c] 表示当前最小和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const row = grid.length
  const column = grid[0].length
  // 横竖第一排
  const f = Array.from({ length: 2 }, () => 0)
  let pre = 0
  let cur = 1
  for (let r = 1; r <= row; r++) {
    for (let c = 1; c <= column; c++) {
      if (r === 1) {
        f[cur] = f[pre] + grid[r - 1][c - 1]
      } else if (c === 1) {
        f[cur] = f[cur] + grid[r - 1][c - 1]
      } else {
        f[cur] = Math.min(f[cur], f[pre]) + grid[r - 1][c - 1]
      }
    }
    cur = 1 - cur
    pre = 1 - pre
  }
  console.info(f)
  return f[cur]
}

module.exports = minPathSum
