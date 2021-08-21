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
  // 如果每一项都是 0 是不是就是相等了
  const cnt = new Array(26).fill(0)
  // 遇到s1的字符，都加一
  // 遇到s2的字符，都减一
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()]
    ++cnt[s2[i].charCodeAt() - 'a'.charCodeAt()]
  }
  // 查看不同的个数
  let diff = 0
  for (const c of cnt) {
    if (c !== 0) {
      ++diff
    }
  }
  if (diff === 0) {
    return true
  }

  for (let i = n; i < m; ++i) {
    // 入的字符x
    const x = s2[i].charCodeAt() - 'a'.charCodeAt(),
      // 出的字符y
      y = s2[i - n].charCodeAt() - 'a'.charCodeAt()
    // 相等的话 不用变
    if (x === y) {
      continue
    }
    // 如果之前是0 说明是新增加的差异化，加一
    if (cnt[x] === 0) {
      ++diff
    }
    // 标记入的字符加一
    ++cnt[x]
    // 入的加一后 等于0 说明
    if (cnt[x] === 0) {
      --diff
    }

    // 出的字符
    // 如果之前就等于0，说明这个字符之前等于s1，diff++
    if (cnt[y] === 0) {
      ++diff
    }
    // 减减
    --cnt[y]
    // 减之后等于0
    if (cnt[y] === 0) {
      --diff
    }
    if (diff === 0) {
      return true
    }
  }
  return false
}

module.exports = checkInclusion
