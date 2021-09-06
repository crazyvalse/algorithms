/*
322. 零钱兑换
定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1

示例 2：
输入：coins = [2], amount = 3
输出：-1

示例 3：
输入：coins = [1], amount = 0
输出：0

示例 4：
输入：coins = [1], amount = 1
输出：1

示例 5：
输入：coins = [1], amount = 2
输出：2


提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */
/**
 * 凑成总金额所需的最少的硬币个数
 * 没有任何一种硬币组合能组成总金额，返回 -1
 *
 * 最少就说明从大数开始计算
 * 思路：
 * 从coins中获得最大的那一个数 - 倒序
 * length = Math.floor(coins[index] / amount)
 *
 * 1. 出口
 * if(cart === amount)
 *
 * 2. 参数
 * index coins 中的索引
 * cart 当前的计算结果
 * num 计算个数
 * 3. 递归过程
 * for 每一项的个数
 * 4. 返回结果
 *
 * 5. 剪枝
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => b - a)
  let result = Infinity
  if (amount === 0) {
    return 0
  }

  const walk = function (index, amount, count) {
    if (amount === 0) {
      result = Math.min(result, count)
      return
    }
    // 如果超过了 coins的长度
    if (index >= coins.length) {
      return
    }
    if (amount < 0) {
      return
    }
    for (let i = Math.floor(amount / coins[index]); i >= 0 && count + i < result; i--) {
      walk(index + 1, amount - coins[index] * i, count + i)
    }
  }
  walk(0, amount, 0)

  return result === Infinity ? -1 : result
}

module.exports = coinChange
