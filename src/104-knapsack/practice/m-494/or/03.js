/*
494. 目标和
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。
现在你有两个符号 + 和 -。
对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

提示：

数组非空，且长度不会超过 20 。
初始的数组的和不会超过 1000 。
保证返回的最终结果能被 32 位整数存下。

 */
/**
 * f[index][S] 表示第 index 个元素
 *
 * f[index][S] = f[index - 1][S - nums[index]] + f[index - 1][S + nums[index]]
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const n = nums.length
  const f = Array.from({ length: n }, () => Array((target + 1) * 2).fill(0))

  f[0][-nums[0]] = 1
  f[0][nums[0]] = 1
  for (let i = 0; i < n; i++) {
    for (let s = 0; s <= target; s++) {
      debugger
      f[i][s] = f[i - 1][s - nums[i]] + f[i - 1][s + nums[i]]
    }
  }
  return f[n - 1][target]
}

module.exports = findTargetSumWays
