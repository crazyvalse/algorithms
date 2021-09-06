/*
1004. 最大连续1的个数 III
给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
返回仅包含 1 的最长（连续）子数组的长度。

示例 1：
输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释：
[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。

示例 2：
输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。

提示：
1 <= A.length <= 20000
0 <= K <= A.length
A[i] 为 0 或 1
 */
/**
 * 1. 窗口是递增的，如果超了 移动做窗口，直到找到一个更大的
 * @param {number[]} a
 * @param {number} k
 * @return {number}
 */
// const longestOnes = function (a, k) {
//   const n = a.length
//   if (n < 2) {
//     return n
//   }
//   let [l, r] = [0, 0]
//   while (r < n) {
//     if (a[r] === 0) {
//       k--
//     }
//
//     // 如果k小于0的时候，说明0多了
//     if (k < 0) {
//       if (a[l] === 0) {
//         k++
//       }
//       l++
//     }
//     r++
//   }
//   return r - l
// }

const longestOnes = function (a, k) {
  const n = a.length
  if (n < 2) {
    return n
  }
  let [l, r] = [0, 0]
  while (r < n) {
    if (a[r++] === 0) {
      k--
    }

    // 如果k小于0的时候，说明0多了
    if (k < 0 && a[l++] === 0) {
      k++
    }
  }
  return r - l
}
module.exports = longestOnes
