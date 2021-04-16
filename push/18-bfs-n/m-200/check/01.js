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
 * dfs
 *
 * 思路：
 * 1. 如果有符合条件的，grid[r][c] === '1'，
 * 遍历数组，找到 grid[r][c] === '1' 的数之和，交由2处理
 * 2. 把它与它相交的所有邻居全部都设置成 '0'
 * 使用 dfs
 *
 * - 参数
 * 起始的 r c
 * - 出口
 * grid[r][c] !== '1'
 * 迭代过程
 * 上下左右
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0
  let row = grid.length
  let column = grid[0].length

  const walk = function (r, c) {
    if (r < 0 || row <= r || c < 0 || column <= c) {
      return
    }
    if (grid[r][c] !== '1') {
      return
    }
    // 先变成0
    grid[r][c] = '0'
    // 上
    walk(r, c - 1)
    // 下
    walk(r, c + 1)
    // 左
    walk(r - 1, c)
    // 右
    walk(r + 1, c)
  }

  const main = function () {
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < column; c++) {
        if (grid[r][c] === '1') {
          walk(r, c)
          result++
        }
      }
    }
    return result
  }

  return main()
}

module.exports = numIslands
