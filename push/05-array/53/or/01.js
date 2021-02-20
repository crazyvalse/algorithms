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
 * 连续相加
 *
 * 1. 先暴力
 *  - 遍历每一个元素
 *    - 从这个元素开始，不断跟后面的元素相加，得到一个最大数值
 * 特点：
 *  - l 应该尽可能大
 *  - 是否应该大于 0
 * let max, l, r
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length < 1) {
    return null
  }

  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (max < sum) {
        max = sum
      }
    }
  }
  return max
}

module.exports = maxSubArray
