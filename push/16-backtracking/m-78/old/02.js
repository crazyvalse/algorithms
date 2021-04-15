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
 * 思路： 每个节点都有两种选择 选或者不选
 *
 * 1. 出口
 * if(index === length){
 *   result.push(container.slice())
 *   return
 * }
 * 2. 参数
 * index 数组的指针
 * container 局部结果
 * 3. 过程
 *
 * container.push(nums[index])
 * walk(index + 1, container)
 * container.pop()
 * walk(index + 1, container)
 * https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  const result = []
  const length = nums.length
  const walk = (index, container) => {
    if (index === length) {
      result.push(container.slice())
    }
    container.push(nums[index])
    walk(index + 1, container)
    container.pop()
    walk(index + 1, container)
  }
  walk(0, [])
  return result
}

console.info(subsets([1, 2, 3]))

module.exports = subsets
