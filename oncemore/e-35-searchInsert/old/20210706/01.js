/*
35. 搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
 */
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (A, target) {
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
  return l
}

module.exports = searchInsert
