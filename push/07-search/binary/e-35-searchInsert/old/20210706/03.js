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
 * 1. 停止条件
 * 2. 返回值
 * 3. 表现行为
 * 4. 参数
 *
 * 停止条件
 * 1. 找到了，返回当前pivot
 * 2. 没找到，即 left > right 返回left
 *
 * 返回值
 * 查找到的结果 与 function
 *
 * 表现行为：
 * 1. 找到 pivot
 * 判断大小 然后调整 left 和right
 *
 * 参数： nums target left right
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0
  }
  const walk = function (nums, target, left, right) {
    if (left > right) {
      return left
    }

    const pivot = left + Math.floor((right - left) / 2)
    if (nums[pivot] === target) {
      return pivot
    } else if (nums[pivot] > target) {
      return walk(nums, target, left, pivot - 1)
    } else {
      return walk(nums, target, pivot + 1, right)
    }
  }
  return walk(nums, target, 0, nums.length - 1)
}

module.exports = searchInsert
