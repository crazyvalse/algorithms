/*
5 - 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"


其实这道题解题思路最重要的是以下几点：

了解dp[j][i]代表从j->i
dp[j+1][i-1]代表的是子字符串的首->尾
然后就是创建二维数组的过程

dp[r][l] = 从 r 到 l 是否是回文

dp[r][l] = s[r] === s[l] && (i - j <= 1 || dp[r - 1][l + 1])
 */

var longestPalindrome = function (s) {
  const n = s.length
  const dp = Array.from({ length: n }, () => new Array(n).fill(false))
  let result = []
  for (let r = 0; r < n; r++) {
    for (let l = r; l >= 0; l--) {
      // 查看前一个是否是回文
      dp[r][l] = s[r] === s[l] && (r - l <= 1 || dp[r - 1][l + 1])
      if (dp[r][l] && r - l + 1 > result.length) {
        result = s.substring(l, r + 1)
      }
    }
  }
  return result
}

module.exports = longestPalindrome
