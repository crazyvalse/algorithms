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
 * 1. 该数组中满足其和 ≥ target
 * 2. 最小的 连续子数组
 * 3. 并返回其长度。如果不存在符合条件的子数组，返回 0
 *
 * min = Infinity
 * total
 * span = 0
 * for
 *  total += ai
 *  // 从后面减
 *  while(total >= target){
 *    min = Max.min(min, span)
 *    total -= a[i - span]
 *    span--
 *  }
 *
 *
 * @param {number} target
 * @param {number[]} a
 * @return {number}
 */
const minSubArrayLen = function (target, a) {
  let [min, total, l, r] = [Infinity, 0, 0, 0]
  while (r < a.length) {
    total += a[r]
    while (total >= target) {
      min = Math.min(min, r - l)
      total -= a[r - l]
      l++
    }
    r++
  }
  return min === Infinity ? 0 : min
}

module.exports = minSubArrayLen
