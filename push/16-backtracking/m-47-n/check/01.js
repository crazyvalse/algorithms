/*
47. 全排列 II

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

示例 2：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 */
/**
 * index平移的时候，当前一个不能跟之前的一样
 * 需要使用一个 used 数组记录使用情况
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  nums.sort()
  const n = nums.length
  const used = Array(n).fill(false)
  const walk = function (index, cart) {
    if (index === n) {
      result.push(cart.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      // 用过了就 pass
      if (used[i]) {
        continue
      }
      // 前面的相等
      if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
        continue
      }

      used[i] = true
      cart.push(nums[i])
      walk(index + 1, cart)
      cart.pop()
      used[i] = false
    }
  }
  walk(0, [])
  return result
}

console.info(permuteUnique([1, 2, 1, 1]))
