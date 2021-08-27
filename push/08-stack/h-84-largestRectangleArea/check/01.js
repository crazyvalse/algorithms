/*
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
输入: [2,1,5,6,2,3]
输出: 10
 */
/**
 * 单调栈 - 维护完之后，最后肯定是要退栈的，退栈的边界
 * 单调递增 单调递减都可以
 * 递增的话 退栈的边界就是 Infinity
 * 递减的话 退栈的边界就是 0
 *
 * 这道题：
 * - 计算最大面积：
 * 递减栈： 以其中一项为例 a[i] 的最大面积： max(a[i] * 1, a[i] * 一顿pop 直到(a[i] < a[top])) 计算长度，边界是 Infinity
 * 递增栈： 计算前一项的长度，然后再往前一项，每一项都计算 a[sti] * (i - sti)，边界是 0
 *
 * > 另外一个边界，就是第一个元素，跟 dp的第0项一样，不影响结果，但是却可以不用考虑处理第一个入栈的情况
 * > 还有一个原因，弹出的每一个节点 跟 再往前一个节点之间都是高于它的，因此需要计算的 并不是 从 sti 到 i的距离，而是从前一个开始的距离
 * > 首项 0 就是托底的
 * |0 1 2 3
 * |      _
 * | |_  | |
 * | |_|_|_|_
 * | | |8| | |
 * | | |8| | |
 * ----------------------------->
 * @param heights
 * @returns {number}
 */
var largestRectangleArea = function (a) {
  if (!a.length) {
    return 0
  }
  // 递增栈，遇到小值，pop重新调整，直到符合位置
  const stack = []
  a = [0, ...a, 0]
  let max = 0
  for (let i = 0; i < a.length; i++) {
    while (stack.length && a[i] < a[stack[stack.length - 1]]) {
      // 需要新的高度
      const lastHighIndex = stack.pop()
      // 需要计算宽度 - 是从前一个还留在栈里的那项
      max = Math.max(max, (i - stack[stack.length - 1] - 1) * a[lastHighIndex])
    }
    // 最后会留一个0在栈中
    stack.push(i)
  }
  return max
}

module.exports = largestRectangleArea
