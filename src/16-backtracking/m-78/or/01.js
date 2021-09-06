/*
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。



示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

示例 2：
输入：nums = [0]
输出：[[],[0]]

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
 */
/**
 * 1. 整数数组nums
 * 2. 数组中的元素 互不相同
 * 3. 所有可能的子集
 * 0: result = [[]]
 * 1: result = [[1], [2], [3]]
 * 2: result = [[1, 2], [1, 3], [2, 3]]
 * 3: result = [[1, 2, 3], [1,2,4], [1, 3, 4]
 *
 * 思路： 从数组中选取一个 放到或不放到结果中
 *  - 有一个最外层的结果，存放每次的结果
 *  - 方法是找到符合标准的结果
 *
 * 1. 出口
 * index === nums.length
 * 把临时结果放到result中
 * 2. 参数
 * - index
 * - milestone
 * 3. 过程
 *
 * walk()
 * milestone.push(nums[index]
 * walk()
 *
 * for i = 0,..., length - 1; i ++
 *  let left = 0,...,length - 1 - i
 *  let right = left + 1,...,
 *  sub = []
 * https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  const result = []
  const walk = function (index, milestone) {
    if (index === nums.length) {
      result.push(milestone.slice())
      return
    }
    milestone.push(nums[index])
    walk(index + 1, milestone)
    milestone.pop()
    walk(index + 1, milestone)
  }
  walk(0, [])
  return result
}

console.info(subsets([1, 2, 3]))

module.exports = subsets
