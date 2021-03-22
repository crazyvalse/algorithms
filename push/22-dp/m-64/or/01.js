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
 * 1. dp含义 dp[row][column] 当前路径总和最小的值
 * 2. F(row, column) 只跟 左和上有关
 *
 * 3. 初始化
 * 1. 横向第一排相等
 * 2. 纵向第一排相等
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) {
    return 0
  }

  const row = grid.length
  const column = grid[0].length
  const dp = Array.from({ length: row }, () => {
    return Array.from({ length: column }).fill(0)
  })
  dp[0][0] = grid[0][0]
  for (let c = 1; c < column; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c]
  }

  for (let r = 1; r < row; r++) {
    dp[r][0] += dp[r - 1][0] + grid[r][0]
  }

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < column; c++) {
      dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c]
    }
  }
  return dp[row - 1][column - 1]
}

module.exports = minPathSum
