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
 * 从后面开始排
 * 当 n < 0 的时候 说明 1还有，不用管
 * m < 0 说明 2还有，接到前面
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
const merge = function (nums1, m, nums2, n) {
  let l = m - 1
  let r = n - 1
  let i = m + n - 1
  while (l >= 0 && r >= 0) {
    nums1[i--] = nums1[l] > nums2[r] ? nums1[l--] : nums2[r--]
  }
  while (r >= 0) {
    nums1[r--] = nums2[r]
  }
  return nums1
}

module.exports = merge
