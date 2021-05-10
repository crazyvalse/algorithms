/*
74. 搜索二维矩阵

编写一个高效的算法来判断m x n矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

 */

/**
 * 把二维变成一维
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 把二维数组转成一维
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length
  const column = matrix[0].length
  function getIndex(index) {
    return [parseInt(index / row), index % row]
  }
  const walk = function (left, right) {
    if (left > right) {
      return false
    }
    const pivot = left + ((right - left) >>> 1)
    const [r, c] = getIndex(pivot)
    if (matrix[r][c] === target) {
      return true
    } else if (matrix[r][c] > target) {
      return walk(left, pivot - 1)
    } else {
      return walk(pivot + 1, right)
    }
  }
  return walk(0, row * column - 1)
}
module.exports = searchMatrix
