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
 * 把矩阵变成一维数组
 *
 * 然后 按照二分法查找
 * 需要把 pivot -> r c
 * r = Math.floor(pivot / col)
 * c = pivot % col
 *
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!Array.isArray(matrix) || matrix.length < 1) {
    return false
  }
  // 获得行和列
  const row = matrix.length
  const col = matrix[0].length

  // 递归方法
  const walk = function (matrix, target, col, left, right) {
    if (left > right) {
      return false
    }
    const pivot = left + ((right - left) >>> 1)
    const mid = getMid(matrix, col, pivot)
    if (mid === target) {
      return true
    } else if (mid < target) {
      return walk(matrix, target, col, pivot + 1, right)
    } else {
      return walk(matrix, target, col, left, pivot - 1)
    }
  }

  // 获得 mid 值
  const getMid = function (matrix, col, pivot) {
    return matrix[Math.floor(pivot / col)][pivot % col]
  }
  return walk(matrix, target, col, 0, row * col - 1)
}
module.exports = searchMatrix
