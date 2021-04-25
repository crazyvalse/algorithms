/*
198. 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。
每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
    偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
    偷窃到的最高金额 = 2 + 9 + 1 = 12 。

提示：
0 <= nums.length <= 100
0 <= nums[i] <= 400
 */
/**
 * 回溯 + 记忆
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!Array.isArray(nums) && nums.length < 1) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  return Math.max(main(nums.slice(0, nums.length - 1)), main(nums.slice(1)))
}

function main(nums) {
  if (!Array.isArray(nums) && nums.length < 1) {
    return 0
  }
  const n = nums.length
  const f = Array.from({ length: n + 1 }, () => 0)
  f[1] = nums[0]
  for (let i = 2; i <= n; i++) {
    // i - 1 偷 不偷
    f[i] = Math.max(f[i - 2] + nums[i - 1], f[i - 1])
  }
  return f[n]
}

module.exports = rob
