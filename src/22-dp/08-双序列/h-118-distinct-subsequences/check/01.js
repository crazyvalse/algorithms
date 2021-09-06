/*
115. 不同的子序列
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。
（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

示例 1：

输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^

示例 2：
输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。
(上箭头符号 ^ 表示选取的字母)
babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
提示：
0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成
 */
/**
 * >>>>>>>>>>>>.. 需要画图 ..>>>>>>>>>>>>>>>
 * f[m][n] s的m个字母 t 个n 个字母共有多少方案
 *
 * f[0][0] = 1
 * f[m][n] = f[m - 1][n]
 * if(sm-1 === tn-1) {
 *   f[m][n] += f[m - 1][n - 1]
 * }
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const M = s.length
  const N = t.length

  const f = Array.from({ length: M + 1 }, () => Array.from({ length: N + 1 }, () => 0))

  for (let m = 0; m <= M; m++) {
    for (let n = 0; n <= N; n++) {
      if (n === 0) {
        f[m][0] = 1
        continue
      }

      if (m === 0) {
        f[0][n] = 0
        continue
      }

      f[m][n] = f[m - 1][n]
      if (s[m - 1] === t[n - 1]) {
        f[m][n] += f[m - 1][n - 1]
      }
    }
  }
  console.info(f)
  return f[M][N]
}

module.exports = numDistinct
