/*
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
输入: [2,1,5,6,2,3]
输出: 10
 */
/**
 * 暴力法：
 * let max
 * 遍历 heights
 * 1. 找到左侧第一个 < heights[i]  left = [0, i]
 * 2. right = [i, length - 1]
 * @param {number[]} heights
 * @return {number}
 */
/**
 * 1. 只需要向右查看最大值即可
 * @param heights
 * @returns {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0

  for (let i = 0; i < heights.length; i++) {
    let left = i
    while (left >= 0 && heights[left] >= heights[i]) {
      left--
    }
    let right = i
    while (right < heights.length && heights[right] >= heights[i]) {
      right++
    }
    let distance = right - left - 1
    let area = heights[i] * distance
    max = Math.max(max, area)
  }

  return max
}

module.exports = largestRectangleArea
