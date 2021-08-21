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
 * 为水就 +1
 * 为边不变
 * @param a
 */
function solution(a) {
  const row = a.length
  const column = a[0].length
  let result = 0
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (a[r][c] === 0) {
        continue
      }
      // 如果 a[r - 1][c - 1] === 1 判断上下左右
      // 如果 是0 result + 1 如果是 1 不变
      // 上
      if (r === 0 || a[r - 1][c] === 0) {
        result += 1
      }
      // 下
      if (r === row - 1 || a[r + 1][c] === 0) {
        result += 1
      }

      if (c === 0 || a[r][c - 1] === 0) {
        result += 1
      }

      if (c === column - 1 || a[r][c + 1] === 0) {
        result += 1
      }
    }
  }
  return result
}

module.exports = solution
