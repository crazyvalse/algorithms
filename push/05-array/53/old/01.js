/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [0]
输出：0

示例 4：
输入：nums = [-1]
输出：-1

示例 5：
输入：nums = [-100000]
输出：-100000
 */
/**
 *  1. 当 前面 相加的结果为负数，需要丢弃之前的结果，赋值当前的值
 *  2. max 判断结果
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return null
  }
  let max = nums[0]
  let sum = nums[0] // 目前相加的结果
  for (let i = 1; i < nums.length; i++) {
    sum = sum < 0 ? nums[i] : sum + nums[i]
    // 如果前面相加的值还没有当前的大，就果断抛弃
    // sum = Math.max(nums[i], sum + nums[i])
    max = Math.max(max, sum)
  }
  return max
}

module.exports = maxSubArray
