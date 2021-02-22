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
  // 排序
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0 || intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i])
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
    }
  }
  return result
}

module.exports = merge
