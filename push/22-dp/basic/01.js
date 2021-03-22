function climbStairs(n) {
  if (n < 3) {
    return n
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
}

function c2(n) {
  if (n < 3) {
    return n
  }

  const dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
