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

 可以从后面开始插入
 p1 指向 nums1 的尾部
 p2 指向 nums2 的尾部
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let next = nums1.length - 1
  while (next >= 0) {
    if (nums1[p1] > nums2[p2] || nums2[p2] === undefined) {
      nums1[next] = nums1[p1--]
    } else if (nums1[p1] <= nums2[p2]|| nums2[p1] === undefined) {
      nums1[next] = nums2[p2--]
    }
    next--
  }

  return nums1
}
console.info(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

module.exports = merge

console.info( 1 > undefined)
