/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和 为目标值的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

 */
/**
 * 分析：
 * 1. params: nums target
 * 2. 和 === target
 * 3. 两个数
 * 4. 返回下标
 *
 * 暴力解法
 *  - 挨个相加，并查看是否等于 9
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > target) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > target) {
        continue
      }
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

module.exports = twoSum
