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
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length
  const isPalindrome = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
  let i = 0,
    j = 0
  for (let t = 0; t < n; t++) {
    i = j = t
    while (i >= 0 && j < n && s[i] === s[j]) {
      isPalindrome[i--][j++] = true
    }

    i = t
    j = t + 1
    while (i >= 0 && j < n && s[i] === s[j]) {
      isPalindrome[i--][j++] = true
    }
  }
  console.info(isPalindrome)
  const f = Array(n + 1).fill(Infinity)
  f[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (isPalindrome[j][i - 1]) {
        f[i] = Math.min(f[i], f[j] + 1)
      }
    }
  }
  return f[n] - 1
}

module.exports = minCut
