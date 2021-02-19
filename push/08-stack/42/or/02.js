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
 * 动态规划：在暴力方法中，我们仅仅为了找到最大值每次都要向左和向右扫描一次。但是我们可以提前存储这个值。因此，可以通过动态编程解决。
 * 找到数组中从下标 i 到最左端最高的条形块高度 left_max
 * 找到数组中从下标 i 到最右端最高的条形块高度 right_max
 * 扫描数组 height 并更新答案
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height === null || height.length === 0) {
    return 0
  }
  let ans = 0
  const size = height.length
  const leftMax = new Array(size)
  const rightMax = new Array(size)

  leftMax[0] = height[0]
  for (let i = 1; i < size; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }
  rightMax[size - 1] = height[size - 1]
  for (let i = size - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }

  for (let i = 1; i < size - 1; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return ans
}

module.exports = trap
