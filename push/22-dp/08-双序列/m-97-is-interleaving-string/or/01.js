/*
97. 交错字符串

给定三个字符串s1、s2、s3，请你帮忙验证s3是否是由s1和s2 交错 组成的。
两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
提示：a + b 意味着字符串 a 和 b 连接。

示例 1：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true

示例 2：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false

示例 3：
输入：s1 = "", s2 = "", s3 = ""
输出：true

提示：
0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1、s2、和 s3 都由小写英文字母组成
 */
/**
 * 1. 前后关系：
 * 2. 与s3的关系： s3[m + n - 1] 得等于 s1[m] 或者 s2[n]
 *
 * if(( s3[m + n - 1] === s1[m] || s3[m + n - 1] === s2[n] )) {
 *   f[m][n] = true
 * }
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length
  const n = s2.length
  if (m + n !== s3.length) {
    return false
  }

  const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false))
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        f[i][j] = true
        continue
      }
      // 来自于 s1 来源于 s1 那么 f[i - 1][j] 也得为true才行
      if (i > 0 && s3[i + j - 1] === s1[i - 1]) {
        f[i][j] = f[i - 1][j]
      }
      // 来自于 s2
      if (j > 0 && s3[i + j - 1] === s2[j - 1]) {
        f[i][j] = f[i][j] || f[i][j - 1]
      }
    }
  }
  return f[m][n]
}

module.exports = isInterleave
