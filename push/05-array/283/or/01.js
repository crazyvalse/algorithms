/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */
/**
 * 题目
 * 1. 将所有 0 移动到数组的末尾
 * 2. 保持非零元素的相对顺序
 * 选择排序 - 选择最大的
 * 思路：
 * 冒泡排序 - 只排 0
 * @param {number[]} nums
 * @return nums Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] === 0) {
        swap(nums, j, j + 1)
      }
    }
  }
  return nums
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = moveZeroes
