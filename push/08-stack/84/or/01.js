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
 * 面积 = 低 * 高
 * 固定高度，我们可以使用一重循环枚举某一根柱子，将其固定为矩形的高度h。
 * 随后我们从这跟柱子开始向两侧延伸，直到遇到高度小于h 的柱子，就确定了矩形的左右边界。
 * 如果左右边界之间的宽度为 w，那么对应的面积为 w∗h。
 * 1. 向左寻找第一个比当前高度低的值
 * 2. 向右寻找第一个比当前高度低的值
 * 3. 计算当前元素可能的最大面积
 *
 * distance怎么算？
 *  - 当前元素最高
 *    i = 2
 *    left = 1 多走了一步
 *    right = 3 多走了一步
 *    3 - 1 - 1
 *    left - right - 1
 *
 *  - 左侧找不到最高的
 *    left = -1
 *  - 右侧找不到最高的
 *    right = length
 *  - 找到了左右
 *    i = 4
 *    left = 1
 *    right = 6
 *    6 - 1 - 1 = 4
 *    left - right - 1
 *
 * i = 2
 * left = 1
 *
 * left = [left, i]
 * right = (i, right]
 * let max = 0
 * let left, right
 * for i = 0,...,heights.length - 1; i ++
 *  // 向左查找第一个比当前高度低的值
 *  left = -1
 *  for j = i - 1,...,0; j --
 *  // 如果没找到？就是本身的高度
 *    // distance怎么算？
 *    if(heights[j] < height[i]){
 *      left = j
 *      break
 *    }
 *
 *  for
 *
 *  distance = left - right - 1
 *  area = distance * heights[i]
 *  max = Math.max(area, max)
 *
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

    const distance = right - left - 1
    const area = distance * heights[i]
    max = Math.max(max, area)
  }

  return max
}

module.exports = largestRectangleArea
