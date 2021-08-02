/**
 *
 *给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 示例 1：

 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 输出：[1,2,2,3,5,6]
 示例 2：

 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 输出：[1]

 提示：

 nums1.length == m + n
 nums2.length == n
 0 <= m, n <= 200
 1 <= m + n <= 200
 -109 <= nums1[i], nums2[i] <= 109

 */
/**
 * 从 1. 的后面开始排
 * 比较大小，然后放到后面
 * 最后剩余
 * A剩余 不管
 * B剩余 补到A上
 *
 * @param A
 * @param m
 * @param B
 * @param n
 */
const merge = function (A, m, B, n) {
  let r = m + n - 1
  m--
  n--
  while (m >= 0 && n >= 0) {
    if (A[m] < B[n]) {
      A[r] = B[n--]
    } else {
      A[r] = A[m--]
    }
    r--
  }
  while (n >= 0) {
    A[n] = B[n]
    n--
  }
  return A
}

module.exports = merge
