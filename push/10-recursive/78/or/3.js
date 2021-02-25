/*
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

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
 * 1. 整数数组 nums
 * 2. 数组中的元素 互不相同
 * 3. 所有可能的子集
 * 0: result = [[]]
 * 1: result = [[1], [2], [3]]
 * 2: result = [[1, 2], [1, 3], [2, 3]]
 * 3: result = [[1, 2, 3], [1,2,4], [1, 3, 4]
 *
 * for i = 0,..., length - 1; i ++
 *  let left = 0,...,length - 1 - i
 *  let right = left + 1,...,
 *  sub = []
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
 let result = [[]]
 result = [[], [1]]
 result = [[], [1], [2], [1, 2]]
 result = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 1. 初始化 result = [[]]
 for i = 0,..., nums.length - 1
  current = nums[i]
  t = result.slice()
  for j = 0,...,t.length - 1
    t.push(current)
  result.concat(t)
 */
var subsets = function (nums, result = [[]], i = 0) {
  if (nums.length === i) {
    return result
  }
  const current = nums[i]



  return subsets(nums, result, --i)
}

console.info(subsets([1, 2, 3, 4]))
