/*
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
示例 2:

输入: "aba"

输出: False
示例 3:

输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 */

/**
 *
 * 1. for循环获得字符串，长度是数组的一半
 * 2. 然后正则匹配，看返回数组的长度
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let total = 0
  for (let i = 0, len = s.length / 2; i < len; i++) {
    const _sa = s.match(new RegExp(`${s.substr(0, i + 1)}`, 'g'))
    if (Array.isArray(_sa) && _sa.length > 1) {
      total = _sa.length * _sa[0].length
      if (total === s.length) {
        return true
      }
    }
  }

  return total === s.length
}

module.exports = repeatedSubstringPattern
