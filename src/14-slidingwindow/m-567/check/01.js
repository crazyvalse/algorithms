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
 * 1. 处理a，把f中包含a的字符全部--
 *
 * 2. 处理b
 *
 * f[bi]++
 * //缩减窗口 1. l++ 2. f--
 * while(f[bi] > 0){
 *   f[a[l++]]--
 * }
 *
 * if(r - l === x) {
 *   return true
 * }
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkInclusion = function (a, b) {
  const pivot = 'a'.charCodeAt()
  const x = a.length
  const y = b.length
  const f = Array(26).fill(0)
  let [l, r] = [0, 0]
  while (r < x) {
    f[a[r].charCodeAt() - pivot]--
    r++
  }

  r = 0
  while (r < y) {
    const rc = b[r].charCodeAt() - pivot
    f[rc]++
    while (f[rc] > 0) {
      f[b[l++].charCodeAt() - pivot]--
    }
    r++
    if (r - l === x) {
      return true
    }
  }

  return false
}

module.exports = checkInclusion
