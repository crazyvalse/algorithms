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
 * 1. 前后排序
 * 2. r[ll, lr] rlr > ail 进行合并 rlr = max(rlr, air)
 * 3. 否则 新开一个
 * @param a
 */
const merge = function (a) {
  if (a.length < 2) {
    return a
  }
  const [l, r] = [0, 1]
  const n = a.length
  a.sort((a, b) => {
    if (a[l] === b[l]) {
      return a[r] - b[r]
    } else {
      return a[l] - b[l]
    }
  })
  const result = [a[0]]
  for (let i = 1; i < n; i++) {
    const last = result[result.length - 1]
    // 右节点 大于 数组左节点： 吞并；查看右节点
    if (last[r] >= a[i][l]) {
      last[r] = Math.max(last[r], a[i][r])
    } else {
      result.push(a[i])
    }
  }
  return result
}

module.exports = merge
