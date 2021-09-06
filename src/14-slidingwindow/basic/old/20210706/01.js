/*
a = [1,4,2,3,4,5,6] 3个为一组，取最大的和
减少while循环
 */

/**
 * total
 * f 加一个
 * l 减一个
 *
 * 过程
 *
 * total += array[++f]
 * if(f - l > 3)
 * total -= array[++l]
 *
 * 出口 f < length
 *
 * 初始化
 * @param {number[]} nums
 * @return {number}
 */
var findMax = function (nums) {
  let max = 0
  let l = 0
  let r = 0
  let sum = 0
  while (r < nums.length) {
    sum += nums[r]
    if (r - l > 2) {
      sum -= nums[l++]
    }
    max = Math.max(max, sum)
    r++
  }
  return max
}
module.exports = findMax
