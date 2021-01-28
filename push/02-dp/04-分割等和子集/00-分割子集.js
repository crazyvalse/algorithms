/*
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */
/**
 * 思路：分割数组 数组的个数
 *  lastArray = []
 *  const newNum = nums.pop()
 *
 *
 * for start 0, ..., (length - 1)
 *  baseArray = [nums[start]]
 *  baseArray = [].concat(nums).slice(start)
 *  for arrayNum 1, ..., length
 *
 *    for lastArrayIndex 0 ... lastArray.length
 *
 * 遍历数组
 * @param nums
 * @returns {Array}
 */
var subsets = function (nums) {
  let baseArray = null
  let lastArray = null
  const length = nums.length
  const result = []
  for (let start = 0; start < length; start) {
    baseArray = [nums[start]]
    lastArray = [].concat(nums).slice(start)
    for (let arrayNum = 1; arrayNum <= length; arrayNum++) {

    }
  }

  return result
}
