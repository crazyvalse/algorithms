/*
给你一个大小为 m * n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。
计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出：6
解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。

示例 2：
输入：grid = [[0,0,0,0,0,0,0,0]]
输出：0

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] 为 0 或 1
 */

function foo(grid) {
  const row = grid.length
  const column = grid[0].length
  let result = 0
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c] === 1) {
        result = Math.max(walk(grid, r, c, row, column), result)
      }
    }
  }
  return result
}

function walk(grid, r, c, row, column) {
  let sum = 0
  const queue = [{ r, c }]

  while (queue.length) {
    const { r: rr, c: cc } = queue.shift()
    sum++
    grid[rr][cc] = 0
    if (rr - 1 >= 0 && grid[rr - 1][cc] === 1) {
      queue.push({ r: rr - 1, c: cc })
    }

    // 下
    if (rr + 1 < row && grid[rr + 1][cc] === 1) {
      queue.push({ r: rr + 1, c: cc })
    }

    // 左
    if (cc - 1 >= 0 && grid[rr][cc - 1]) {
      queue.push({ r: rr, c: cc - 1 })
    }

    if (cc + 1 < column && grid[rr][cc + 1]) {
      queue.push({ r: rr, c: cc + 1 })
    }
  }
  return sum
}

console.info(
  foo([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
)
