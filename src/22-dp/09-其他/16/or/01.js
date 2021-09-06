/*
424. 替换后的最长重复字符

给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
注意：字符串长度 和 k 不会超过 104。

示例 1：
输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。

示例 2：
输入：s = "AABABBA", k = 1
输出：4
解释：
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。

 */
/**
 * 滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const n = s.length
  if (n < 2) {
    return n
  }
  let maxCount = 0
  const f = Array(26).fill(0)
  const base = 'A'.charCodeAt()
  let [l, r] = [0, 0]
  while (r < n) {
    // 给新增的字符计数
    const rcc = s[r].charCodeAt() - base
    f[rcc]++
    // 判断当前是否是最长
    maxCount = Math.max(maxCount, f[rcc])

    // 当前窗口的长度大于 最长字符个数 + k 说明其他字符超了
    // 这个时候 需要移动左边了
    if (r - l + 1 > maxCount + k) {
      f[s[l].charCodeAt() - base]--
      l++
    }
    r++
  }
  return r - l
}

module.exports = characterReplacement
