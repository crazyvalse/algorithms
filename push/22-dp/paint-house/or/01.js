/*
描述

ENG
这里有n个房子在一列直线上，现在我们需要给房屋染色，分别有红色蓝色和绿色。
每个房屋染不同的颜色费用也不同，你需要设计一种染色方案使得相邻的房屋颜色不同，并且费用最小，返回最小的费用。

费用通过一个nx3 的矩阵给出，比如cost[0][0]表示房屋0染红色的费用，cost[1][2]表示房屋1染绿色的费用。

样例
样例 1:
输入: [[14,2,11],[11,14,5],[14,3,10]]
输出: 10
解释: 第一个屋子染蓝色，第二个染绿色，第三个染蓝色，最小花费：2 + 5 + 3 = 10.

样例 2:
输入: [[1,2,3],[1,4,6]]
输出: 3
 */
/**
 * 状态：
 * f 表示前n个房子的最小花费
 *
 * 三个状态
 * f[n][0] = Math.min(f[n - 1][1], fn[n - 1][2]) + cost[n][0] // 另外两个可以随便涂抹
 * @param cost
 */
const paintHouse = function (cost) {
  const n = cost.length
  const f = new Array(n + 1).fill(new Array(3).fill(Infinity))
  f[0] = new Array(3).fill(0)
  for (let i = 1; i <= n; i++) {
    debugger
    f[i][0] = Math.min(f[i - 1][1] + cost[i - 1][1], f[i - 1][2] + cost[i - 1][2])
    f[i][1] = Math.min(f[i - 1][0] + cost[i - 1][0], f[i - 1][2] + cost[i - 1][2])
    f[i][2] = Math.min(f[i - 1][1] + cost[i - 1][1], f[i - 1][0] + cost[i - 1][0])
  }
  return Math.min(f[n][0], f[n][1], f[n][2])
}

module.exports = paintHouse
