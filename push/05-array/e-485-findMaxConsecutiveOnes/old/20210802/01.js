/*
485. 最大连续 1 的个数
给定一个二进制数组，计算其中最大连续 1 的个数。

示例：
输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

提示：

输入的数组只包含 0 和 1 。
输入数组的长度是正整数，且不超过 10,000。
 */
/**
 * f[i] 是第i位最大连续的个数
 * f[i] = nums[i] === 1 ? f[i - 1] + 1 : 0
 * @param {number[]} A
 * @return {number}
 */
var findMaxConsecutiveOnes = function (A) {
  const n = A.length
  const f = Array(n + 1).fill(0)
  let max = 0
  for (let i = 1; i <= n; i++) {
    f[i] = A[i - 1] === 1 ? f[i - 1] + 1 : 0
    max = Math.max(f[i], max)
  }
  return max
}

module.exports = findMaxConsecutiveOnes