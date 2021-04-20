/*
63. 不同路径 II

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
网格中的障碍物和空位置分别用 1 和 0 来表示。

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

示例 2：
输入：obstacleGrid = [[0,1],[0,0]]
输出：1

提示：

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] 为 0 或 1

 */
/**
 * f[r][c] 第r行第c列 共有多少种路径
 * 如果 grid[r][c] === 1 => f[r][c] = 0 continue
 *
 * f[r][c] = f[r - 1][c] + f[r][c - 1]
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  const column = obstacleGrid[0].length
  const f = Array.from({ length: row + 1 }, () => Array(column + 1).fill(0))
  f[0][1] = 1
  for (let r = 1; r <= row; r++) {
    for (let c = 1; c <= column; c++) {
      if (obstacleGrid[r - 1][c - 1] === 1) {
        f[r][c] = 0
        continue
      }
      f[r][c] = f[r - 1][c] + f[r][c - 1]
    }
  }
  return f[row][column]
}

module.exports = uniquePathsWithObstacles
