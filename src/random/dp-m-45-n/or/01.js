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
 * 每次选取一个可跳范围内最远的那个继续跳
 * 先计算 max
 *
 * let counter = 0
 * let max
 * for i = 0,...,n - 1 选取跳跃节点
 *  for j = nums[i],...,1
 *   next = nums[i + j]
 *   max = Max(max, next)
 *
 * if(max < n){
 *   counter ++
 * } else {
 *   break
 * }
 *
 * @param nums
 */
const canJump = function (nums) {
  let n = nums.length
  let dp = Array.from({ length: n }, (i) => n + 1)
  dp[0] = 0
  // i 是跳跃的距离
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      //
      if (j + nums[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[n - 1]
}

module.exports = canJump
