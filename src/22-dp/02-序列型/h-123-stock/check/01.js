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
 * f[i][0] 利润
 *
 * 两笔交易
 * 1. buy:  第一次买 - a[i]
 * 2. sell: 第一次卖 + a[i]
 * 3. buy:  第二次买 第一次的利润 - a[i]
 * 4. sell  第二次卖
 *
 * @param {number[]} a
 * @return {number}
 */
var maxProfit = function (a) {
  const n = a.length
  const b1 = Array(n + 1).fill(0)
  const s1 = Array(n + 1).fill(0)
  const b2 = Array(n + 1).fill(0)
  const s2 = Array(n + 1).fill(0)
  b1[0] = -Infinity
  b2[0] = -Infinity
  for (let i = 1; i <= n; i++) {
    b1[i] = Math.max(b1[i - 1], -a[i - 1])
    // 卖或不卖
    s1[i] = Math.max(b1[i - 1] + a[i - 1], s1[i - 1])
    b2[i] = Math.max(b2[i - 1], s1[i] - a[i - 1])
    // 卖或不卖
    s2[i] = Math.max(b2[i - 1] + a[i - 1], s2[i - 1])
  }
  return s2[n]
}

module.exports = maxProfit
