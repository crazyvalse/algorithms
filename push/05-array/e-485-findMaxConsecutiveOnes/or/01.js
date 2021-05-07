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
 * f 是最大连续的个数
 * f[i] = nums[i] === 1 ? f[i - 1] + 1 : 0
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const n = nums.length
  const f = Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) {
    f[i] = nums[i - 1] === 1 ? f[i - 1] + 1 : 0
  }
  return f[n]
}

module.exports = findMaxConsecutiveOnes
