/*
给定一个n个元素有序的（升序）整型数组nums 和一个目标值target ，写一个函数搜索nums中的 target，如果目标值存在返回下标，否则返回 -1。


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
 * 递归：
 * 1. 终结条件
 * 2. 返回值
 * 3. 每一个环节的解决问题思路
 * 4. 返回方程式
 *
 * 1. 终结条件
 *  - 找到了 nums[pivot] === target return pivot
 *  - left > right return -1
 * 2. 返回值 方程式
 *
 * 3. 每一个环节 n
 *  - 找到pivot
 *  - 判断 nums[pivot] 与 target
 *    - nums[pivot] < target
 *    - search(left = pivot + 1, right)
 *    else
 *    search(left, right = pivot - 1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return walk(nums, target, 0, nums.length - 1)
}

const walk = function (nums, target, left, right) {
  if (left > right) {
    return -1
  }
  const pivot = left + Math.floor((right - left) / 2)
  if (nums[pivot] === target) {
    return pivot
  } else if (nums[pivot] < target) {
    return walk(nums, target, pivot + 1, right)
  } else {
    return walk(nums, target, left, pivot - 1)
  }
}

module.exports = search
