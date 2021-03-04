/*
209. 长度最小的子数组
给定一个含有n个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组[numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组[4,3]是该条件下的长度最小的子数组。

示例 2：
输入：target = 4, nums = [1,4,4]
输出：1

示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 */

/**
 *
 * 条件：
 * 1. 正整数数组
 * 2. target
 * 3. >=target 的最小数组
 * 滑动窗口
 * 1. 先做窗口
 *
 * 2.
 * 加后面一个
 * 减掉前一个或者多个
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let total = 0
  // 1. 先做窗口
  let min = Infinity
  let left = 0
  let right = 0
  // 再进行查找
  // [2,3,1,2,4,3]
  // 2 3 1 2; r = 3 l = 0
  // 3 1 2 4; r = 4 l = 1
  // 1 2 4; r = 4 l = 2
  // 2 4; r = 4 l = 3
  // 2 4 3; r = 5 l = 3
  // 4 3; r = 5 l = 4
  while (right < nums.length) {
    total += nums[right++]
    while (total >= target) {
      min = Math.min(min, right - left)
      total -= nums[left++]
    }
  }
  return min === Infinity ? 0 : min
}

module.exports = minSubArrayLen
