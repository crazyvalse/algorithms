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
 * [-2,1,-3,4,-1,2,1,-5,4]
 * 1. sum < 0 就抛弃
 * 1. 先判断 sum 是否 < 0，如果是的话 sum = 0
 * 2. sum += A[i]
 * 3. max(max, sum)
 * @param {number[]} A
 * @return {number}
 */
var maxSubArray = function (A) {
  let sum = 0
  let max = -Infinity
  for (let i = 0; i < A.length; i++) {
    if (sum < 0) {
      sum = 0
    }
    sum = Math.max(A[i], sum + A[i])
    max = Math.max(max, sum)
  }
  return max
}

module.exports = maxSubArray
