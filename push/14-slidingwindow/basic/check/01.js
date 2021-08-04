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
 * @param {number[]} A
 * @return {number}
 */
var findMax = function (A) {
  let sum = 0
  let max = 0
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    if (i - 3 >= 0) {
      sum -= A[i - 3]
    }
    max = Math.max(max, sum)
  }
  return max
}
module.exports = findMax
