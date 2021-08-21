/*
200. 岛屿数量

给你一个由  '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例 1：
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

示例 2：
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3


提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'

 */
/**
 * @param {character[][]} a
 * @return {number}
 */
var numIslands = function (a) {
  const row = a.length
  const column = a[0].length
  let counter = 0
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (a[r][c] === '1') {
        counter++
        walk(r, c)
      }
    }
  }

  function walk(r, c) {
    if (r < 0 || r >= row || c < 0 || c >= column) {
      return
    }

    if (a[r][c] === '0') {
      return
    }

    a[r][c] = '0'
    walk(r - 1, c)
    walk(r + 1, c)
    walk(r, c - 1)
    walk(r, c + 1)
  }

  return counter
}

module.exports = numIslands
