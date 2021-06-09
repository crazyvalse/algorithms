/*
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

示例：

输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 
提示：

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
 */

/**
 * 1. reduce index % 2 === 0 偶数，从数组中找到偶数，并移除
 * 1. 当 A[i] % 2 === 1 奇数 i % === 1 也得是 奇数，不然就得找
 * @param {number[]} A
 * @return {number[]}
 */
// var sortArrayByParityII = function (A) {
//   for (let i = 0, len = A.length; i < len; i++) {
//     // 奇数
//     if (i % 2) {
//       if (A[i] % 2 === 0) {
//         for (let j = i + 1; j < len; j++) {
//           if (A[j] % 2) {
//             A[i] = A[i] ^ A[j]
//             A[j] = A[i] ^ A[j]
//             A[i] = A[i] ^ A[j]
//             break
//           }
//         }
//       }
//     } else {
//       // 偶数
//       // 奇数
//       if (A[i] % 2 !== 0) {
//         for (let j = i + 1; j < len; j++) {
//           // 找到偶数
//           if (A[j] % 2 === 0) {
//             A[i] = A[i] ^ A[j]
//             A[j] = A[i] ^ A[j]
//             A[i] = A[i] ^ A[j]
//             break
//           }
//         }
//       }
//     }
//   }
//
//   return A
// }

var sortArrayByParityII = function (A) {
  for (let i = 0, len = A.length; i < len; i++) {
    // 奇数
    if ((i % 2 !== 0 && A[i] % 2 === 0) || (i % 2 === 0 && A[i] % 2 !== 0)) {
      for (let j = i + 1; j < len; j++) {
        if ((i % 2 !== 0 && A[j] % 2 !== 0) || (i % 2 === 0 && A[j] % 2 === 0)) {
          A[i] = A[i] ^ A[j]
          A[j] = A[i] ^ A[j]
          A[i] = A[i] ^ A[j]
          break
        }
      }
    }
  }
  return A
}

console.info(sortArrayByParityII([4, 2, 5, 7]))
console.info(sortArrayByParityII([3, 4]))
