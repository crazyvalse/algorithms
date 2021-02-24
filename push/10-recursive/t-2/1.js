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
function jump(n) {
  if (n < 1) {
    return 0;
  }
  if (n <= 2) {
    return n;
  }
  return jump(n - 1) + jump(n - 2)

}

module.exports = jump
