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
 * if((s3[m + n] === s1[m] || s3[m + n] === s2[n] ) && (f[m - 1][n] || f[m][n])) {
 *
 *
 *   f[m][n] = true
 * }
 * @param {string} a
 * @param {string} b
 * @param {string} s
 * @return {boolean}
 */
var isInterleave = function (a, b, s) {
  const M = a.length
  const N = b.length
  if (M + N !== s.length) {
    return false
  }

  const f = Array.from({ length: M + 1 }, () => Array(N + 1).fill(false))
  for (let m = 0; m <= M; m++) {
    for (let n = 0; n <= N; n++) {
      if (m === 0 && n === 0) {
        f[0][0] = true
        continue
      }
      // 出现相同的字母优先使用a
      // 来源于 a，判断a的上一个字母是否被用，
      if (
        m > 0 &&
        // 判断a的上一个字母是否被用
        f[m - 1][n] &&
        // 判断当前字母是否等于 s
        s[m + n - 1] === a[m - 1]
      ) {
        f[m][n] = true
      }
      // 来源于 b
      if (
        n > 0 &&
        // 不是来源于a，来源于b
        !f[m][n] &&
        // 先判断b的上一个是否被用
        f[m][n - 1] &&
        // 再判断当前的字母是否相等
        s[m + n - 1] === b[n - 1]
      ) {
        f[m][n] = true
      }
    }
  }
  return f[M][N]
}

module.exports = isInterleave
