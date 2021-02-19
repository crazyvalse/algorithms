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
 * 暴力法：直接按问题描述进行。对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0
  const size = height.length
  for (let i = 1; i < size - 1; i++) {
    let maxLeft = 0
    let maxRight = 0
    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j])
    }
    for (let j = i; j < size; j++) {
      maxRight = Math.max(maxRight, height[j])
    }
    ans += Math.min(maxLeft, maxRight) - height[i]
  }
  return ans
}

module.exports = trap
