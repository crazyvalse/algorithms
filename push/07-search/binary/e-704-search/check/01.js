/*
给定一个n个元素有序的（升序）整型数组nums 和一个目标值target ，
写一个函数搜索nums中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1


提示：

你可以假设 nums中的所有元素是不重复的。
n将在[1, 10000]之间。
nums的每个元素都将在[-9999, 9999]之间。
 */
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var search = function (A, target) {
  let l = 0
  let r = A.length - 1
  while (l <= r) {
    const pivot = l + ((r - l) >>> 1)
    if (A[pivot] === target) {
      return pivot
    } else if (A[pivot] > target) {
      r = pivot - 1
    } else {
      l = pivot + 1
    }
  }
  return -1
}

module.exports = search
