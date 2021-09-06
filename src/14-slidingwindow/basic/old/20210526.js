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
  let l = 0
  let f = 0
  let sum = 0
  let max = 0
  while (f < nums.length) {
    sum += nums[f]
    if (f - l >= 3) {
      sum -= nums[l++]
    }
    max = Math.max(max, sum)
    f++
  }
  return max
}
module.exports = findMax
