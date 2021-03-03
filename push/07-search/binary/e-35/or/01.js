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
 * 查找位置
 * 考虑极限情况
 *  nums[length - 1] < target{
 *    return length
 *  }
 *
 *  nums[0] > target {
 *    0
 *  }
 *
 * 不考虑极限情况
 * 查找中间的位置
 *
 * let pivot = left + floor((left - right) /2)
 *
 * 停止的条件：
 *
 * if(nums[pivot] === target) return pivot
 * left - right === 1 || left - right === 0 return right
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  if (nums[right] < target) {
    return right + 1
  }
  if (nums[left] > target) {
    return left
  }

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2)
    if (nums[pivot] === target) {
      return pivot
    } else if (target < nums[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return left
}
module.exports = searchInsert
