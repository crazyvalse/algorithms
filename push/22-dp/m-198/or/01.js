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
  let result = 0
  const walk = function (index, cart) {
    if (index === nums.length) {
      result = Math.max(result, cart)
    }
    for (let i = index; i < nums.length; i++) {
      if (i - index > 1) {
        walk(i + 2, cart + nums[i])
      }
    }
  }
  walk(0, nums[0])
  return result
}

module.exports = rob
