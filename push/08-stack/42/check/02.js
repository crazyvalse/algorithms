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
 *
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  if (heights.length < 3) {
    return 0
  }
  const leftMax = [heights[0]]
  for (let i = 1; i < heights.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], heights[i])
  }
  const lastIndex = heights.length - 1
  const rightMax = new Array(heights.length).fill(0)
  rightMax[lastIndex] = heights[lastIndex]
  for (let i = lastIndex - 1; i > -1; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], heights[i])
  }

  return heights.reduce((inc, item, index) => {
    return inc + Math.min(leftMax[index], rightMax[index]) - item
  }, 0)
}

module.exports = trap

const array = [1, 2, 3]
