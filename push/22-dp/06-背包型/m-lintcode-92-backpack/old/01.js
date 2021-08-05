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
 * 三种情况可以为true
 * f[i - 1][w] === true
 * w - A[i] >= 0 && f[i - 1][w - A[i]] === true
 * w - A[i] >= 0 && f[i][w - A[i]] === true
 *
 * max = Max(max, w)
 * @param m
 * @param A
 */
function backPack(m, A) {
  let max = 0
  const n = A.length
  const f = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false))
  f[0][0] = true
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= m; w++) {
      if (f[i - 1][w] || (w - A[i - 1] >= 0 && f[i - 1][w - A[i - 1]])) {
        f[i][w] = true
        max = Math.max(max, w)
      }
    }
  }
  return max
}

module.exports = backPack
