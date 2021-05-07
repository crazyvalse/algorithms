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
 * 1. 如果数组长度小于2 返回本身
 * 贪心算法：若当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
 * 1. 前一个元素大于0 就与当前元素相加，如果相加后小于0 就废弃，还是保留当前值
 *
 * 当出现正数
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length < 1) {
    return null
  }

  let sum = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 之前相加的值 与 当前值相比较，大的重新赋值给 sum
    sum = Math.max(nums[i], sum + nums[i])
    // 判断 max
    max = Math.max(sum, max)
  }

  return max
}

module.exports = maxSubArray
