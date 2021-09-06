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

/**
 * 1. 并查集
 * 2. 把二维数组做成一维数组
 * 3. 如果当前节点为 1，union 上下左右
 * 4. 如果当前节点为 0，则zn++
 * counter - 0 个的个数
 * @param grid
 */
function numIslands(grid) {
  const row = grid.length
  const column = grid[0].length
  const uf = new UnionFind(row * column)
  let zn = 0
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c] === '0') {
        zn++
        continue
      }
      const index = getIndex(column, r, c)
      // 上
      if (r > 0 && grid[r - 1][c] === '1') {
        uf.union(index, getIndex(column, r - 1, c))
      }
      // 下
      if (r + 1 < row && grid[r + 1][c] === '1') {
        uf.union(index, getIndex(column, r + 1, c))
      }
      // 左
      if (c > 0 && grid[r][c - 1] === '1') {
        uf.union(index, getIndex(column, r, c - 1))
      }
      // 右
      if (c + 1 < column && grid[r][c + 1] === '1') {
        uf.union(index, getIndex(column, r, c + 1))
      }
    }
  }
  return uf.counter - zn
}

function getIndex(column, r, c) {
  return r * column + c
}

class UnionFind {
  constructor(n) {
    this.a = Array.from({ length: n }, (a, i) => i)
    this.counter = n
  }

  find(x) {
    while (x !== this.a[x]) {
      this.a[x] = this.a[this.a[x]]
      x = this.a[x]
    }
    return x
  }

  connected(a, b) {
    return this.find(a) === this.find(b)
  }

  union(a, b) {
    if (this.connected(a, b)) {
      return
    }
    this.a[this.find(a)] = this.find(b)
    this.counter--
  }
}

module.exports = numIslands
