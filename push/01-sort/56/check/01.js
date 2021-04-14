/**
 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 示例 1：
 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 输出：[[1,6],[8,10],[15,18]]
 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

 示例 2：
 输入：intervals = [[1,4],[4,5]]
 输出：[[1,5]]
 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

 [[1, 9], [2, 5], [19, 20], [10, 11], [12, 20], [0, 3], [0, 1], [0, 2]]
 ------------------------------------------------------------------------------------------------------------------------
 1. 排序第一个元素 sort(array[0])
 2. 判断下一组第一个值比merged数组中的最后一个值的第二个值大的话 if(array[i][0] > merged[last][1])， merged.push()
 - 否则 merged.push()
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals
  }
  const result = [intervals[0]]
  const left = 0
  const right = 1
  intervals.sort((a, b) => {
    if (a[left] === b[left]) {
      return a[right] - b[right]
    } else {
      return a[left] - b[left]
    }
  })
  // 主要是判断右括号
  for (let i = 1; i < intervals.length; i++) {
    if (result.length === 0 || intervals[i][left] > result[result.length - 1][right]) {
      result.push(intervals[i])
    } else {
      result[result.length - 1][right] = Math.max(intervals[i][right], result[result.length - 1][right])
    }
  }
  return result
}

module.exports = merge
