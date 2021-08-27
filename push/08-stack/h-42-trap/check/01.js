/*
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

示例 2：
输入：height = [4,2,0,3,2,5]
输出：9

提示：
n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
 */

/**
 * |0 1 2 3
 * |_
 * | |    _
 * | |_  | |
 * | | |_| |
 * | | | | |
 * | | | | |
 * ----------------------------->
 *
 * 单调递减
 * 1. 遇到大的
 * 弹出每一个
 * sum = (min(a[sti], a[i]) - a[spi]) * span
 * span = i - sti - 1
 *
 * 边界：
 * 右边界：小 说明已经没法计算了 大 计算-正常逻辑
 * 左边界：小 说明不需要计算，pop出来之后就不管了；大：push
 * @param {number[]} a
 * @return {number}
 */
var trap = function (a) {
  let sum = 0
  const stack = []

  for (let i = 0; i < a.length; i++) {
    // 当大的时候，开始计算
    while (stack.length && a[i] > a[stack[stack.length - 1]]) {
      // stack pop index
      const spi = stack.pop()

      // 如果第一个是小的
      if (!stack.length) {
        break
      }
      // stack top index
      const sti = stack[stack.length - 1]
      const w = i - sti - 1
      sum += (Math.min(a[sti], a[i]) - a[spi]) * w
    }
    stack.push(i)
  }
  return sum
}

module.exports = trap
