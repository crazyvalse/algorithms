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

class UnionFind {
  constructor(n) {
    // 连通分量的个数
    this.count = n
    this.parents = Array.from({ length: n }, (a, i) => i)
  }

  find(x) {
    if (x === this.parents[x]) {
      return x
    }
    return (this.parents[x] = this.find(this.parents[x]))
  }

  getCount() {
    return this.count
  }

  union(x, y) {
    const xRoot = this.find(x)
    const yRoot = this.find(y)
    if (xRoot === yRoot) {
      return
    }

    this.parents[xRoot] = yRoot
    this.count--
  }
}

var numIslands = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  let spaces = 0 // 空地的数量
  const unionFind = new UnionFind(rows * cols)

  function main() {
    const directions = [
      [1, 0],
      [0, 1]
    ]
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '0') {
          spaces++
        } else {
          for (let d of directions) {
            const newX = i + d[0]
            const newY = j + d[1]
            if (newX < rows && newY < cols && grid[newX][newY] === '1') {
              unionFind.union(getIndex(i, j), getIndex(newX, newY))
            }
          }
        }
      }
    }
  }

  function getIndex(i, j) {
    return i * cols + j
  }

  main()
  return unionFind.getCount() - spaces
}

module.exports = numIslands
