/*
209. 长度最小的子数组
给定一个含有n个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组[numsl, numsl+1, ..., numsr-1, numsr] ，
并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组[4,3]是该条件下的长度最小的子数组。

示例 2：
输入：target = 4, nums = [1,4,4]
输出：1

示例 3：
输入：target = 11, nums =
输出：0

提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 */

/**
 * min = Min(r - l, min)
 *
 * while(l)
 * 1. 定义变量
 * l = 0
 * r = 0
 *
 * while(r < n){
 *   sum += nums[r]
 *   while(sum >= target){
 *    Min()
 *    sum -= nums[l++]
 *   }
 *   r++
 * }
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity
  let sum = 0
  let l = 0
  let r = 0
  while (r < nums.length) {
    sum += nums[r]
    while (sum >= target) {
      min = Math.min(min, r - l + 1)
      sum -= nums[l++]
    }
    r++
  }

  return min === Infinity ? 0 : min
}

module.exports = minSubArrayLen
