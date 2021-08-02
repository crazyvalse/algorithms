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
 */
/**
 * 判断 result[last][right] >= item[left] 扩大右侧 result[last][right] = item[right]
 * 否则 新开一个
 * @param intervals
 */
const merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals
  }
  const left = 0
  const right = 1
  intervals.sort(([a1, a2], [b1, b2]) => {
    if (a1 === b1) {
      return a2 - b2
    } else {
      return a1 - b1
    }
  })
  const result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const last = result.length - 1
    if (result[last][right] >= intervals[i][left]) {
      result[last][right] = intervals[i][right]
    } else {
      result.push(intervals[i])
    }
  }
  return result
}

module.exports = merge
