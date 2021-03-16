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
 * bfs:
 * 思路：
 * 1. 找到第一个非0的节点
 *  - result++
 *  以下的目的是把所有的为1节点都变为0
 *  - 把这个节点设为零
 *  - 并把这个节点放到 queue中
 *
 * 2. while (queue.length)
 *  - 取出 queue中的节点
 *  - 设为零
 *  - 找它上下左右
 *    - 设为0
 *    - 放到queue中
 *
 * - 处理到最后
 *
 * let result = 0 // 记录结果
 * let queue = []
 * let row = grid.length
 * let column = grid[0].length
 *
 * for r = 0,..., length - 1
 *  for c = 0,...,length-1
 *    if(grid[r][c] === '1')
 *      result++
 *      grid[r][c] = '0'
 *      queue.push({r,c})
 *      walk()
 *
 * walk(){
 *   while(queue.length){
 *     const {r, c} = queue.shift()
 *     grid[r][c] = '0'
 *
 *     if(r - 1 >=0 && grid[r-1][c] === '0'){
 *       grid[r-1][c] = '0'
 *       queue.push(grid[r-1][c])
 *     }
 *     //剩下四个
 *   }
 *
 *
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0
  const queue = []
  const row = grid.length
  const column = grid[0].length
  // 1. 找到非0的点，并把它周围所有 '1' 变为 '0'
  const main = function () {
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < column; c++) {
        if (grid[r][c] === '0') {
          continue
        }
        // 记录
        result++
        // 变为 '0'
        grid[r][c] = '0'
        queue.push({
          r,
          c
        })
        walk()
      }
    }
  }

  function walk() {
    while (queue.length !== 0) {
      const { r, c } = queue.shift()
      handleValuableNode(r - 1, c)
      handleValuableNode(r + 1, c)
      handleValuableNode(r, c - 1)
      handleValuableNode(r, c + 1)
    }
  }

  function handleValuableNode(r, c) {
    // 边界
    if (r < 0 || c < 0 || r >= row || c >= column || grid[r][c] === '0') {
      return
    }
    grid[r][c] = '0'
    queue.push({
      r,
      c
    })
  }

  main()
  return result
}

module.exports = numIslands
