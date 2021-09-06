/*
小青蛙跳台阶

一只青蛙一次可以跳上1级台阶，也可以跳上2级。
求该青蛙跳上一个n级的台阶总共有多少种跳法。
1、第一递归函数功能 假设 f(n) 的功能是求青蛙跳上一个n级的台阶总共有多少种跳法
 */
/**
 * 1. 青蛙一次可以调 1或者2
 * @param n
 * @returns {number}
 */
// n = 4 1 2
// n = 3 2 3
// n = 2 2
// n = 3 1 2
// n = 2 2
// n
function numWays(n, current = 1, next = 2) {
  if (n <= 1) {
    return n
  }
  if (n <= 2) {
    return next
  }
  return numWays(n - 1, next, current + next)
}

module.exports = numWays
