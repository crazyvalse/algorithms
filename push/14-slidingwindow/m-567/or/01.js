/*
567. 字符串的排列

给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，s1 的排列之一是 s2 的 子串 。



示例 1：

输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
示例 2：

输入：s1= "ab" s2 = "eidboaoo"
输出：false


提示：

1 <= s1.length, s2.length <= 104
s1 和 s2 仅包含小写字母
 */
/**
 * 滑动窗口
 * 重点在于如何判断两个子串是否互为子串
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkInclusion = function (a, b) {
  const base = 'a'.charCodeAt()
  const m = a.length
  const n = b.length
  if (m > n) {
    return false
  }

  // 1. 先做字母个数的数组
  const ac = Array(26).fill(0)
  const bc = Array(26).fill(0)
  for (let i = 0; i < m; i++) {
    ++ac[a[i].charCodeAt() - base]
    ++bc[b[i].charCodeAt() - base]
  }

  const acs = ac.toString()

  // 如果相等，直接返回true
  if (acs === bc.toString()) {
    return true
  }

  // 滑动窗口
  // n之前全部都统计完了，开始从n统计
  for (let i = m; i < n; i++) {
    // 减掉前一个
    --bc[b[i - m].charCodeAt() - base]
    // 添加后一个
    ++bc[b[i].charCodeAt() - base]
    if (acs === bc.toString()) {
      return true
    }
  }

  return false
}

module.exports = checkInclusion
