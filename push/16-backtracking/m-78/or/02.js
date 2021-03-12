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
 * 1. 出口
 * length === nums.length 数组长度的时候 退出递归
 * 2. 参数
 * left length 数组的长度
 *
 * 3. 过程
 *
 *
 * https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  const result = []
  const walk = function (index, cart) {
    // 先把当前结果放入到cart中，为了防止[] 与最后一个不再的问题
    result.push(cart.slice())
    for (let i = index; i < nums.length; i++) {
      cart.push(nums[i])
      walk(i + 1, cart)
      cart.pop()
    }
  }
  walk(0, [])
  return result
}

console.info(subsets([1, 2, 3]))

module.exports = subsets
