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
 * 双指针：和方法 2 相比，我们不从左和从右分开计算，我们想办法一次完成遍历。
 *
 * 我们在遍历数组时维护一个栈。
 * 从动态编程方法的示意图中我们注意到，只要 right_max[i] > left_max[i] （元素 0 到元素 6），积水高度将由 left_max 决定，类似地 left_max[i] > right_max[i] （元素 8 到元素 11）
 * 所以我们可以认为如果一端有更高的条形块（例如右端），积水的高度依赖于当前方向的高度（从左到右）。
 * 当我们发现另一侧（右侧）的条形块高度不是最高的，我们则开始从相反的方向遍历（从右到左）。
 * 我们必须在遍历时维护 left_max 和 right_max，但是我们现在可以使用两个指针交替进行，实现 1 次遍历即可完成。
 * @param {number[]} height
 * @return {number}
 */
/**
 * 高低指针
 * @param heights
 */
var trap = function (heights) {
  if (heights.length < 1) {
    return 0
  }
  let result = 0
  let l = 0
  let r = heights.length - 1
  let leftMax = [heights[0]]
  let rightMax = [heights[heights.length - 1]]

  while (l <= r) {
    // 左边的小，就处理左边的
    if (leftMax < rightMax) {
      leftMax = Math.max(leftMax, heights[l])
      result += leftMax - heights[l]
      l++
    } else {
      rightMax = Math.max(rightMax, heights[r])
      result += rightMax - heights[r]
      r--
    }
  }
  return result
}

module.exports = trap
