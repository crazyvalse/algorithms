/*
斐波那契数列 动态规划
1. 做大数组 - dp[n] = dp[n - 1] + dp[n - 2]
2. 状态转移
3. 初始化状态
 */

function fbnq(n) {
  // 一维数组，dp[n] 表示前两个数的和
  if (n === 0 || n === 1) {
    return n
  }
  const dp = Array.from({ length: n }, () => 0)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

module.exports = fbnq
