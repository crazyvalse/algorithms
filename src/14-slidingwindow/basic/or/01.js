/*
a = [1,4,2,3,4,5,6] 3个为一组，取最大的和
减少while循环
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMax = function (nums) {
  let last = nums[0] + nums[1] + nums[2]
  let max = last
  let index = 0
  while (index < nums.length - 3) {
    last = last - nums[index] + nums[index + 3]
    max = Math.max(max, last)
    index++
  }
  return max
}
module.exports = findMax
