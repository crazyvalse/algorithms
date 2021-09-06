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
 * f[i] 表示能否调到第i - 1个位置
 * 涂格子， 把 后面能跳到的位置全部涂满，如果调不到就跳出
 * if f[i - 1] === true
 * @param nums
 */
const canJump = function (nums) {
  const n = nums.length
  const f = Array(n + 1).fill(false)
  f[0] = true
  for (let i = 1; i < n && f[i - 1]; i++) {
    for (let j = i; j < n; j++) {
      if (j <= i - 1 + nums[i - 1]) {
        f[i] = true
      }
    }
  }
  return f[n - 1]
}

module.exports = canJump
