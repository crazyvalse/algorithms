/*
  在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
  示例 1:
  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5

  示例 2:
  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:
  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */
/**
 * 冒泡
 * 选择排序
 * 插入
 * 堆排序
 *
 * @param {number[]} A
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (A, k) {
  const n = A.length
  for (let i = n; i > n - k; i--) {
    for (let j = 0; j < i; j++) {
      if (A[j] > A[j + 1]) {
        ;[A[j], A[j + 1]] = [A[j + 1], A[j]]
      }
    }
  }
  return A[n - k]
}

module.exports = findKthLargest
