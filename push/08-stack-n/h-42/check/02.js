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
 * 记录遍历的结果
 * 记录每一个节点最左的最大值 从左开始遍历记录当前最大值
 * 记录每一个节点最右的最大值 从右开始遍历记录当前最大值
 *
 *
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  const n = heights.length
  if (n < 3) {
    return 0
  }
  let leftMax = Array.from({ length: n })
  leftMax[0] = heights[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(heights[i], leftMax[i - 1])
  }
  let rightMax = Array.from({ length: n })
  rightMax[n - 1] = heights[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i + 1])
  }
  return heights.reduce((pre, cur, index) => {
    return pre + Math.min(leftMax[index], rightMax[index]) - cur
  }, 0)
}

module.exports = trap
