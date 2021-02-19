/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 n/2 的元素
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：[3,2,3]
输出：3

示例 2：
输入：[2,2,1,1,1,2,2]
输出：2

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */
/**
 * 由于多数元素超过半数，那么排序之后，中间的元素肯定是多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort()
  return nums[parseInt(nums.length / 2)]
}

module.exports = majorityElement
