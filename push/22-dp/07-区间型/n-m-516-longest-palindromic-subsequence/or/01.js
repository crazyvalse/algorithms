/*
516. 最长回文子序列
给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

示例 1:
输入:
"bbbab"
输出:4
一个可能的最长回文子序列为 "bbbb"。

示例 2:
输入:
"cbbd"
输出:2
一个可能的最长回文子序列为 "bb"。

提示：
1 <= s.length <= 1000b
s 只包含小写英文字母
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length
  const f = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  for (let i = n - 1; i >= 0; i--) {
    f[1][1] = 1
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        f[i][j] = f[i + 1][j - 1] + 2
      } else {
        f[i][j] = Math.max(f[i + 1][j], f[i][j - 1])
      }
    }
  }
  return f[0][n - 1]
}

module.exports = longestPalindromeSubseq
