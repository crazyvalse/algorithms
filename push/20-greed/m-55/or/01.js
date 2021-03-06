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
 *
 * 回溯
 * 遍历每个数据
 * 遍历每一个步骤
 *
 * 1. 出口
 * if(index === nums.length - 1 )
 *  result = true
 *  return
 * 2. 参数
 * index: 步骤
 * 3. 递归过程
 * for i = nums[index],...,1
 *  canjump(i)
 *
 * @param nums
 */
const canJump = function (nums) {
  if (nums.length === 0) {
    return true
  }
  const visited = new Array(nums.length).fill(false)
  let result = false
  const walk = function (index) {
    if (result) {
      return
    }
    if (index >= nums.length - 1) {
      result = true
      return
    }
    if (visited[index]) {
      return
    }
    visited[index] = true
    for (let i = nums[index]; i > 0; i--) {
      walk(index + i)
    }
  }
  walk(0)
  return result
}

module.exports = canJump
