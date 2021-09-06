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
递归法：
1. 出口
nums.length === 0
return result

2. 参数
nums, result

03. 过程
const current = nums.pop()
return [...result, ...result.map(item => [...item, current])]
1. copy result
 */
var subsets = function (nums) {
  const walk = function (result, nums) {
    if (nums.length === 0) {
      return result
    }
    const current = nums.shift()
    return walk([...result, ...result.map((item) => [...item, current])], nums)
  }
  return walk([[]], nums.slice())
}

console.info(subsets([1, 2, 3]))
