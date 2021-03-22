/*
55
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。
示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。


提示：

1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105
 */
/**
 * 描述清楚思路的过程
 * 从数组中取出
 *
 * - 状态
 * dp 当前能跳的最大位置
 * - 状态转义方程
 * dp[i] = Math.max(i + array[i], dp[i - 1])
 * - 初始化 边界
 * dp[0] = array[i]
 * dp[i] = 0,...,0
 * - 优化
 *
 * dp[length - 1] >= length - 1
 *
 * @param nums
 */
const canJump = function (nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return true
  }
  const n = nums.length
  const f = Array.from({ length }, () => false)
  f[0] = true
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (f[i] && i + nums[i] >= j) {
        f[j] = true
        break
      }
    }
  }
  return f[n - 1]
}

module.exports = canJump
