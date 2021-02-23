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
 * 递减栈：我们可以不用像方法 2 那样存储最大高度，而是用栈来跟踪可能储水的最长的条形块。使用栈就可以在一次遍历内完成计算。
 *
 * 我们在遍历数组时维护一个栈。
 * 如果当前的条形块小于或等于栈顶的条形块，我们将条形块的索引入栈，
 * 意思是当前的条形块被栈中的前一个条形块界定。
 * 如果我们发现一个条形块长于栈顶，我们可以确定栈顶的条形块被当前条形块和栈的前一个条形块界定，
 * 因此我们可以弹出栈顶元素并且累加答案到ans 。
 * |0 1 2 3
 * |_     _
 * | |_  | |
 * | | |_| |
 * | | | | |
 * | | | | |
 * ----------------------------->
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  let inc = 0
  const stack = []
  for (let i = 0; i < heights.length; i++) {
    // stack 不为空，且 新塞入的值比栈顶的
    while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
      const poppedIndex = stack.pop()
      if (!stack.length) {
        break
      }
      const currentStackTopIndex = stack[stack.length - 1]
      const distance = i - currentStackTopIndex - 1
      const boundedHeight = Math.min(heights[i], heights[currentStackTopIndex]) - heights[poppedIndex]
      inc += distance * boundedHeight
    }
    stack.push(i)
  }

  return inc
}

module.exports = trap
