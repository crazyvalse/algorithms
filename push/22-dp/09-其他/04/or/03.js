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
 * 并查集
 * @param {character[][]} a
 * @return {number}
 */
var numIslands = function (a) {
  const row = a.length
  const column = a[0].length
  let c0 = 0
  const uf = new UnionFind(row * column)

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (a[r][c] === '0') {
        c0++
        continue
      }
      const index = getIndex(r, c)
      if (r - 1 >= 0 && a[r - 1][c] === '1') {
        uf.union(index, getIndex(r - 1, c))
      }

      if (r + 1 < row && a[r + 1][c] === '1') {
        uf.union(index, getIndex(r + 1, c))
      }

      if (c - 1 >= 0 && a[r][c - 1] === '1') {
        uf.union(index, getIndex(r, c - 1))
      }

      if (c + 1 < column && a[r][c + 1] === '1') {
        uf.union(index, getIndex(r, c + 1))
      }
    }
  }

  function getIndex(r, c) {
    return r * column + c
  }
  return uf.counter - c0
}

class UnionFind {
  constructor(n) {
    this.a = Array.from({ length: n }, (t, i) => i)
    this.counter = n
  }

  find(x) {
    while (this.a[x] !== x) {
      this.a[x] = this.a[this.a[x]]
      x = this.a[x]
    }
    return x
  }

  connected(a, b) {
    return this.find(a) === this.find(b)
  }

  union(a, b) {
    const ar = this.find(a)
    const br = this.find(b)
    if (ar === br) {
      return
    }
    this.a[ar] = br
    this.counter--
  }
}

module.exports = numIslands
