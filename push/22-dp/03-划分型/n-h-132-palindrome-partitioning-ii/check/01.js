/*
132. 分割回文串 II

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。

返回符合要求的 最少分割次数 。

示例 1：
输入：s = "aab"
输出：1
解释：只需一次分割就可将s 分割成 ["aa","b"] 这样两个回文子串。

示例 2：
输入：s = "a"
输出：0

示例 3：
输入：s = "ab"
输出：1

提示：

1 <= s.length <= 2000
s 仅由小写英文字母组成

 */
/**
 * 一、确定状态
 * 最后一步：S[j,...,N - 1]
 *
 * 二、转移方程
 * f[i] = min(f[j] + 1 | S[j...i-1]是回文串)
 *
 * 判断有多少个回文
 * f[n] 前n个字符 最少有多少个回文
 * f[n] = Math.min(f[n], f[j] + 1)  // 如果从 j是回文的话就是从后往前看是回文的话 说明后面一大块是 1，那么 f[i] = f[j](前面的回文数) + 1
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length
  const isPart = getIsPartitioning(s)

  const f = Array(n + 1).fill(Infinity)
  f[0] = 0
  // 前 i 个字母
  for (let r = 1; r <= n; r++) {
    // 从 j 到 i 是否是回文 是的话 f[j] + 1
    for (let l = 0; l < r; l++) {
      if (isPart[l][r - 1]) {
        // 前 j 个回文 加上 1
        f[r] = Math.min(f[r], f[l] + 1)
      }
    }
  }
  return f[n] - 1
}

/**
 * 制作一个二维数组
 * f[i][ip] = 第i个字母到ip是否是回文
 * 时间复杂度 Math.pow(n, 3)
 * @param s
 */
// function getIsPartitioning(s) {
//   const n = s.length
//   const f = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       if (isPartitioning(s, i, j)) {
//         f[i][j] = true
//       }
//     }
//
//     for (let j = i; j >= 0; j--) {
//       if (isPartitioning(s, j, i)) {
//         f[i][j] = true
//       }
//     }
//   }
//   return f
// }
//
// function isPartitioning(s, l, r) {
//   while (l < r) {
//     if (s[l] !== s[r]) {
//       return false
//     }
//     l++
//     r--
//   }
//   return true
// }

function getIsPartitioning(s) {
  const n = s.length
  const g = new Array(n).fill(0).map(() => new Array(n).fill(true))

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      g[i][j] = s[i] === s[j] && g[i + 1][j - 1]
    }
  }
  return g
}

const s = 'abba'
console.info(minCut(s))
// console.info(isPartitioning(s, 0, s.length - 1))
// // const f = getIsPartitioning('aabbaa')
// //
// console.info(getIsPartitioning('aabbaa'))

module.exports = minCut
