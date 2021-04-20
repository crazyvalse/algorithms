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
 *  1. 能到达
 *    - 跳过最后一个数
 *    不能到达
 *    - 到某一个节点就停了 max <= index
 *  遍历每一个数，然后找到 max，只要 max大于最后一个数 直接跳true 小于等于 index 跳false
 *  最后 false兜底
 * @param nums
 */
const canJump = function (nums) {
  if (nums.length < 1) {
    return true
  }
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, i + nums[i])
    if (max >= nums.length - 1) {
      return true
    }
    if (max <= i) {
      return false
    }
  }
  return false
}

module.exports = canJump
