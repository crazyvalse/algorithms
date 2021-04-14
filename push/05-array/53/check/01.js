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
 * sum：前面的和 如果前一个的值相加后小于0 sum 等于当前值，否则相加
 * 加完之后比较
 * max：当前最大和
 *
 * if(array[i] + sum <= 0){
 *   sum = array[i]
 * } else {
 *   sum = sum + array[i]
 * }
 * max = Math.max(max, sum)
 *
 * 初始化
 * let = sum
 *
 * max = array[0]
 *
 * 初始化
 *
 *
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let max = nums[0]
  let sum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    sum = sum <= 0 ? nums[i] : sum + nums[i]
    max = Math.max(max, sum)
  }
  return max
}

module.exports = maxSubArray
