/*
1143. 最长公共子序列

给定两个字符串text1 和text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的子序列是指这样一个新的字符串：
它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。


示例 1：
输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。

示例 2：
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。

示例 3：
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

提示：

1 <= text1.length, text2.length <= 1000
text1 和text2 仅由小写英文字符组成。

 */
/**
 * f[m][n] 前m 和 前n个子串的最长公共序列
 *
 * f[0][0] = 0
 *
 * if(s1[m - 1] === s2[n - 1]) {
 * // 上一个字母最长公共序列
 *   f[m][n] === Math.max(f[m - 1][n - 1] + 1, f[m][n])
 * }
 *
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var longestCommonSubsequence = function (a, b) {
  const M = a.length
  const N = b.length
  const f = Array(M + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(0))
  for (let m = 1; m <= M; m++) {
    for (let n = 1; n <= N; n++) {
      f[m][n] = Math.max(f[m][n - 1], f[m - 1][n])
      if (a[m - 1] === b[n - 1]) {
        // 上一个字母最长公共序列
        f[m][n] = Math.max(f[m][n], f[m - 1][n - 1] + 1)
      }
    }
  }
  return f[M][N]
}

module.exports = longestCommonSubsequence
