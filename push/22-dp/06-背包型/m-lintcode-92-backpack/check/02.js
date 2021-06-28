/*
92 · 背包问题
描述
在n个物品中挑选若干物品装入背包，最多能装多满？假设包的大小为m，每个物品的大小为A[i]
你不可以将物品进行切割。

样例
样例 1:
	输入:  [3,4,8,5], backpack size=10
	输出:  9

样例 2:
	输入:  [2,3,5,7], backpack size=12
	输出:  12

挑战
O(n x m) 的时间复杂度 and O(m) 空间复杂度
如果不知道如何优化空间，O(n x m) 的空间复杂度也可以通过.
 */
/**
 * 要么 前 n - 1个就可以了
 * 要么 加上 n 获得结果
 *
 * 每个项不是无限
 * 确定状态
 * f[i][w] 当包的大小为w时，是否能装满 大小为 w + 1, 初始值为 false
 * 转移方程
 * f[w] = w - A[i] >= 0 && f[w - A[i]] === true
 * 初始状态和边界
 * f[0] = true
 * 优化
 *
 * @param m
 * @param A
 */
function backPack(m, A) {
  if (m === 0 || A.length === 0) {
    return 0
  }
  A.sort((a, b) => a - b)
  // write your code here
  let max = 0
  const n = A.length
  const f = Array(m + 1).fill(false)
  f[0] = true
  for (let i = 0; i < n; i++) {
    for (let w = m; w > 0; w--) {
      if (w - A[i] >= 0 && f[w - A[i]]) {
        f[w] = true
        max = Math.max(max, w)
      }
    }
  }
  return max
}

module.exports = backPack
