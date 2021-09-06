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
  let n = A.length
  let max = 0
  let total = 0
  for (let i = 0; i < n; i++) {
    total += A[i]
    if (i >= 3) {
      total -= A[i - 3]
    }
    max = Math.max(max, total)
  }
  return max
}
module.exports = findMax
