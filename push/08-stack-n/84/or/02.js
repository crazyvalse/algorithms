/*
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
输入: [2,1,5,6,2,3]
输出: 10
 */
/**
 * 单调栈：
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  var maxarea = 0
  var stack = []
  heights.push(0)
  heights.unshift(0)
  for (var i = 0; i < heights.length; i++) {
    // 栈顶的 大于 当前的 处理
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      maxarea = Math.max(maxarea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  return maxarea
}

module.exports = largestRectangleArea
