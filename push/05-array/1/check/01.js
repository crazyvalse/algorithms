/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和 为目标值的那两个整数，并返回它们的数组下标。

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
 * 使用一个map来记录结果
 * map
 * for i = 0,...,length -1; i++
 *  // 没有这个值
 *  if(map[target - array[i]] === undefined){
 *    map[array[i]] = i
 *  } else {
 *    return [i, map[target - array[i]] ]
 *  }
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] === undefined) {
      map[nums[i]] = i
    } else {
      return [map[target - nums[i]], i]
    }
  }
  return []
}

module.exports = twoSum
