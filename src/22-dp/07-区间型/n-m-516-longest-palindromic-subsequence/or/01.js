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

https://www.bilibili.com/video/BV18W411d7k2?from=search&seid=16465227653069529153
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length
  const f = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  // 按照长度来计算，对角线来开
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1
      if (i === j) {
        f[i][j] = 1
        continue
      }

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
