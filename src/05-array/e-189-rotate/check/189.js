/*
给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数。

示例 1:

n = 7

0...3
4...6

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为O(1) 的原地算法。

1. 整体reverse
2. [0, k -1]
3. [k, length - 1]
 */

const rotate = function (array, k) {
  const n = array.length - 1
  reverse(array, 0, n)
  reverse(array, 0, k - 1)
  reverse(array, k, n)
  return array
}

const reverse = function (array, start, end) {
  while (start < end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}

module.exports.reverse = reverse
module.exports.rotate = rotate
