/*
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

496
901
42
84
 */
/**
 *
 * 由于不知道什么时候才能得到高气温，所以先放到栈中保存，一旦符合条件就弹出处理
 * 单调栈
 *  - 如果小于前一项 放入栈中
 *  - 大于前一项，弹出前一个，计算结果，并加入新一项（索引）
 *
 * 遇到小于 前一项的，入栈
 *
 * @param {number[]} a
 * @return {number[]}
 */
const dailyTemperatures = function (a) {
  const n = a.length
  const result = Array(n).fill(0)
  const stack = []
  for (let i = 0; i < n; i++) {
    // 先处理前面的，如果新值大于栈中，弹出处理
    while (stack.length && a[i] > a[stack[stack.length - 1]]) {
      const index = stack.pop()
      result[index] = i - index
    }
    // 始终都需要把新的一项放到栈中
    stack.push(i)
  }
  return result
}

module.exports = dailyTemperatures
