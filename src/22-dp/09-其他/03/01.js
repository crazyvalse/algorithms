/*
463. 岛屿的周长
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。
整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。
格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边

示例 2：
输入：grid = [[1]]
输出：4

示例 3：
输入：grid = [[1,0]]
输出：4
 */
/**
 * result.push(cart.join(' '))
 * @param a
 */
function solution(a) {
  const row = a.length
  const column = a[0].length
  const f = Array.from({ length: row + 1 }, () => Array(column + 1).fill(0))
  for (let r = 1; r <= row; r++) {
    for (let c = 0; c <= column; c++) {
      if (c === 0) {
        f[r][c] = f[r - 1][column]
        continue
      }
      f[r][c] = f[r][c - 1]
      if (a[r - 1][c - 1] === 0) {
        continue
      }
      f[r][c] += 4
      if (r - 2 >= 0 && a[r - 2][c - 1] === 1) {
        f[r][c] -= 2
      }

      if (c - 2 >= 0 && a[r - 1][c - 2] === 1) {
        f[r][c] -= 2
      }
    }
  }
  return f[row][column]
}

module.exports = solution
