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
 * 从 A 的尾巴开始加
 *
 * 剩下的：
 * A剩下了 不动
 * B剩下了 混合到A中
 * @param A
 * @param m
 * @param B
 * @param n
 */
const merge = function (A, m, B, n) {
  let l = m + n - 1
  m--
  n--
  while (m >= 0 && n >= 0) {
    if (A[m] >= B[n]) {
      A[l] = A[m]
      m--
    } else {
      A[l] = B[n]
      n--
    }
    l--
  }

  // 如果 第二组还有剩余的，放到第一组中
  while (n >= 0) {
    A[n] = B[n]
    n--
  }
  return A
}

module.exports = merge
