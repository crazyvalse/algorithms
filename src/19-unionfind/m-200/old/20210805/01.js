/*
 给你一个由'1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
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

function UnionFind(n) {
  this.counter = n
  this.parents = Array.from({ length: n }, (t, i) => i)
}

UnionFind.prototype.find = function (x) {
  while (this.parents[x] !== x) {
    this.parents[x] = this.parents[this.parents[x]]
    x = this.parents[x]
  }
  return x
}

UnionFind.prototype.getCount = function () {
  return this.counter
}

UnionFind.prototype.connected = function (x, y) {
  return this.find(x) === this.find(y)
}

UnionFind.prototype.union = function (x, y) {
  const xRoot = this.find(x)
  const yRoot = this.find(y)
  if (xRoot === yRoot) {
    return
  }
  this.parents[xRoot] = yRoot
  this.counter--
}

/**
 * 1. 把二维数组转成一维数组
 * 2.
 *
 * 最后的计算公式是 length - 1的个数
 * @param grid
 */
function numIslands(grid) {
  const row = grid.length
  const column = grid[0].length
  const length = row * column
  const uf = new UnionFind(length)
  let countOfOne = 0

  function getIndex(r, c) {
    return r * column + c
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c] === '0') {
        continue
      }
      // 计算1的个数
      countOfOne++

      // 上
      if (r > 0 && grid[r - 1][c] === '1') {
        uf.union(getIndex(r, c), getIndex(r - 1, c))
      }

      // 下
      if (r + 1 < row && grid[r + 1][c] === '1') {
        uf.union(getIndex(r, c), getIndex(r + 1, c))
      }

      // 左
      if (c > 0 && grid[r][c - 1] === '1') {
        uf.union(getIndex(r, c), getIndex(r, c - 1))
      }

      // 右
      if (c + 1 < column && grid[r][c + 1] === '1') {
        uf.union(getIndex(r, c), getIndex(r, c + 1))
      }
    }
  }
  return uf.counter - (length - countOfOne)
}

module.exports = numIslands
