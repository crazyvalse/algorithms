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
 * let max = -Infinity
 * f[m] = 是否能够装大小为m的东西
 * @param size
 * @param a
 */
function backPack(size, a) {
  const f = Array(size + 1).fill(false)
  let max = -Infinity
  f[0] = true
  // 反过来
  for (let i = 0; i < a.length; i++) {
    // 需要一遍遍确认每个size是否可以
    for (let s = size; s > 0; s--) {
      if (s - a[i] >= 0 && f[s - a[i]]) {
        f[s] = true
        max = Math.max(s, max)
      }
    }
  }
  return max === -Infinity ? 0 : max
}

module.exports = backPack
