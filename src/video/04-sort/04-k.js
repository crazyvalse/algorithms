/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a)
//   return nums[k - 1]
// }

// var findKthLargest = function (nums, k) {
//   for (let i = nums.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[j + 1]) {
//         nums[j] = nums[j] ^ nums[j + 1]
//         nums[j + 1] = nums[j] ^ nums[j + 1]
//         nums[j] = nums[j] ^ nums[j + 1]
//       }
//     }
//   }
//   return nums[k - 1]
// }

var findKthLargest = function (nums, k) {
  // 从 0 开始排序
  for (let i = 0; i < k; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[j - 1]) {
        nums[j] = nums[j] ^ nums[j - 1]
        nums[j - 1] = nums[j] ^ nums[j - 1]
        nums[j] = nums[j] ^ nums[j - 1]
      }
    }
  }
  return nums[k - 1]
}

console.info(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.info(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
