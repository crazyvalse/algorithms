/*
394 · 硬币排成线

描述
有 n 个硬币排成一条线。两个参赛者轮流从右边依次拿走 1 或 2 个硬币，直到没有硬币为止。拿到最后一枚硬币的人获胜。

请判定 先手玩家 必胜还是必败?

若必胜, 返回 true, 否则返回 false.

样例
样例 1:

输入: 1
输出: true
样例 2:

输入: 4
输出: true
解释:
先手玩家第一轮拿走一个硬币, 此时还剩三个.
这时无论后手玩家拿一个还是两个, 下一次先手玩家都可以把剩下的硬币拿完.
挑战
O(1) 时间复杂度且O(1) 存储。

 */
/**
 * 当
 * if(f[i - 1] &&f[i - 2]) {
 *   f[i] = false
 * }
 * @param n
 */
function firstWillWin(n) {
  if (n === 0) {
    return false
  }
  const f = Array(n).fill(true)
  for (let i = 2; i < n; i++) {
    // 无论是拿一个还是两个，都必负
    if (f[i - 1] && f[i - 2]) {
      f[i] = false
    }
  }
  return f[n - 1]
}

module.exports = firstWillWin
