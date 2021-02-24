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
  if (jump.cache[n]) {
    return jump.cache[n]
  }

  if (n < 1) {
    jump.cache[n] = 0
  } else if (n <= 2) {
    jump.cache[n] = n
  } else {
    jump.cache[n] = jump(n - 1) + jump(n - 2)
  }
  return jump.cache[n]
}

jump.cache = {}

module.exports = jump
