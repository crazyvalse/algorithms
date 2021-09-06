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
 * dfs：
 * 思路，
 * 遍历数组
 *  - 找到第一个为1的点
 *  - 开始递归所有周围为1的点，并把他们变成0
 *  - 变完后寻找下一个
 * 1. 出口
 *
 * 2. 参数
 * currentX, currentY
 * 3. 递归过程
 *  - 越界情况
 *  - 判断当前的点是否为1
 *
 *  walk四周
 *
 * 4. 返回值
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0
  const borderY = grid.length - 1
  const borderX = grid[0].length - 1
  const walk = function (currentX, currentY) {
    if (currentY < 0 || currentY > borderY || currentX < 0 || currentX > borderX) {
      return
    }
    if (grid[currentY][currentX] === '0') {
      return
    }
    grid[currentY][currentX] = '0'
    walk(currentX, currentY - 1)
    walk(currentX, currentY + 1)
    walk(currentX - 1, currentY)
    walk(currentX + 1, currentY)
  }
  for (let y = 0; y <= borderY; y++) {
    for (let x = 0; x <= borderX; x++) {
      if (grid[y][x] === '1') {
        result++
        walk(x, y)
      }
    }
  }
  return result
}

module.exports = numIslands
