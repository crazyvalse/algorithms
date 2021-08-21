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
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length
  if (n > m) {
    return false
  }
  const cnt = new Array(26).fill(0)
  // 计算 s1 的字符个数
  // 每一项全为负
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()]
  }
  let left = 0

  for (let right = 0; right < m; ++right) {
    // x 是最右侧的字符
    const x = s2[right].charCodeAt() - 'a'.charCodeAt()
    // 右侧字符加一
    ++cnt[x]
    // 如果 是非等于的字符，如果
    while (cnt[x] > 0) {
      // 左侧字符→移动
      // 计数减一
      --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()]
      ++left
    }
    // 操作完之后 是
    if (right - left + 1 === n) {
      return true
    }
  }
  return false
}

module.exports = checkInclusion
