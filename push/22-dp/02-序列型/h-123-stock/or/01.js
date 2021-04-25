/*
123. 买卖股票的最佳时机 III

给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。



示例 1:

输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
示例 2：

输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
示例 4：

输入：prices = [1]
输出：0


提示：

1 <= prices.length <= 105
0 <= prices[i] <= 105

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/di-gui-dong-tai-gui-hua-tan-xin-er-fen-4-xxd5/

 */
/**
 * 思路
 * 只要 prices[i] > prices[i - 1] result += 差值
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 1. 状态
 * buy1 第一次买
 * sell1 第一次卖
 * buy2 第二次买
 * sell2 第二次卖
 *
 * 2. 状态转义
 *
 * buy1[i] = Max(buy[i - 1], - price[i])
 * sell1[i] = Max(sell1[i - 1], buy1[i - 1] + price[i])
 * buy2[i] = Max(buy2[i - 1], sell1[i - 1] - price[i])
 * sell2[i] = Max(sell2[i - 1], buy2[i - 1] + price[i])
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!Array.isArray(prices) || prices.length === 0) {
    return 0
  }
  const n = prices.length
  const buy1 = Array.from({ length: n }, () => 0)
  const buy2 = Array.from({ length: n }, () => 0)
  const sell1 = Array.from({ length: n }, () => 0)
  const sell2 = Array.from({ length: n }, () => 0)

  buy1[0] = -prices[0]
  sell1[0] = 0
  buy2[0] = -prices[0]
  sell2[0] = 0

  for (let i = 1; i < n; i++) {
    buy1[i] = Math.max(buy1[i - 1], -prices[i])
    sell1[i] = Math.max(sell1[i - 1], buy1[i - 1] + prices[i])
    buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i])
    sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i])
  }
  return sell2[n - 1]
}

module.exports = maxProfit
