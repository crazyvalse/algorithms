/*
131. 分割回文串

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

示例 2：
输入：s = "a"
输出：[["a"]]

- 1 <= s.length <= 16
- s 仅由小写英文字母组成
 */

/**
 * 1. 选取子字符串
 * 2. 判断回文
 *  - 是的话就放到cart中
 *  - 不是的话，忽略
 * 3. 是回文的话，处理剩下的字符串
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []
  const n = s.length
  const f = Array.from({ length: n }, () => new Array(n).fill(false))
  for (let r = 0; r < n; r++) {
    for (let l = r; l >= 0; l--) {
      f[r][l] = s[r] === s[l] && (r - l <= 1 || f[r - 1][l + 1])
      if (f[r][l]) {
        result.push()
      }
    }
  }
  return result
}

console.info(partition('aba'))

module.exports = partition
