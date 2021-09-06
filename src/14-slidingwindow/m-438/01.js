/*
438. 找到字符串中所有字母异位词

给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指字母相同，但排列不同的字符串。



示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。


提示:

1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number[]}
 */
var findAnagrams = function (a, b) {
  const f = Array(26).fill(0)
  const base = 'a'.charCodeAt()
  const result = []
  // 先做f
  for (let i = 0; i < b.length; i++) {
    f[b[i].charCodeAt() - base]--
  }

  // 处理a
  let [l, r] = [0, 0]
  while (r < a.length) {
    const arc = a[r].charCodeAt() - base
    f[arc]++
    // 说明要么字符多了要不不是需要的
    while (f[arc] > 0) {
      f[a[l++].charCodeAt() - base]--
    }
    r++
    if (r - l === b.length) {
      result.push(l)
    }
  }
  return result
}

module.exports = findAnagrams
