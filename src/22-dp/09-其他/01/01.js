/*
题目1：word break
1.1 题目描述：
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
For example, given
s =“leetcode”,
dict =[“leet”, “code”].
Return true because"leetcode"can be segmented as"leet code".
 */

/**
 * f[n] 利用数组是否能组成s
 *
 * if(i - dil > 0 && f[i - dil]) {
 *   f[i] = true
 * }
 *
 * for c 1...n
 *  for d 0...l
 * @param s
 * @param dict
 * @returns {boolean}
 */
function solution(s, dict) {
  const n = s.length
  const f = Array(n + 1).fill(false)
  f[0] = true
  for (let w = 1; w <= n; w++) {
    for (let c of dict) {
      const t = s.substring(w - c.length, w)
      if (w - c.length >= 0 && f[w - c.length]) {
        f[w] = f[w] || t === c
      }
    }
  }
  return f[n]
}

module.exports = solution
