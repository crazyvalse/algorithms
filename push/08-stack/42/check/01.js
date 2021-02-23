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
 * 暴力法： 遍历每一个高度 并且向左向右寻找最高值，然后使用最小的最高值减去当前高度，就是可以接收的容量
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  let ans = 0
  for (let i = 0; i < heights.length; i++) {
    // 查找左侧最高的
    let leftMax = heights.slice(0, i + 1).reduce((pre, cur) => Math.max(pre, cur), 0)
    let rightMax = heights.slice(i, heights.length).reduce((pre, cur) => Math.max(pre, cur), 0)
    ans += Math.min(leftMax, rightMax) - heights[i]
  }
  return ans
}

module.exports = trap
