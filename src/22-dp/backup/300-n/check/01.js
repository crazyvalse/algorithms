/*
300. 最长递增子序列

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。


示例 1：
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

示例 2：
输入：nums = [0,1,0,3,2,3]
输出：4

示例 3：
输入：nums = [7,7,7,7,7,7,7]
输出：1


提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104


进阶：

你可以设计时间复杂度为 O(n2) 的解决方案吗？
你能将算法的时间复杂度降低到O(n log(n)) 吗?
 */
/**
 * 1. 递增
 * 2. 子序列
 *
 * 1. 状态
 * f[i] 前i-1个 最长的递增子序列
 *
 * 2. 状态转义
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!Array.isArray(nums) || nums.length < 1) {
    return 0
  }
  const n = nums.length
  let max = null
  let f = Array.from({ length: n + 1 }, () => 1)
  for (let i = 1; i <= n; i++) {
    // 前面的个数
    for (let j = 1; j < i; j++) {
      if (nums[j - 1] < nums[i - 1] && (max === null || max < nums[j - 1])) {
        max = nums[j - 1]
        f[i]++
      }
    }
    f[i] = Math.max(f[i], f[i - 1] + 1)
  }
  return f[n]
}

module.exports = lengthOfLIS
