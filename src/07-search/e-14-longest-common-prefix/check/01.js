/*
14. 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

 */
/**
 * l = 0
 * r = length
 * 1. 找到最短的一个字符串作为base
 * 2. 获得 commonPrefix 二分法获得
 * 3. 判断是否是commonPrefix
 *  - 是，向右移动
 *  - 否，向左移动
 *
 * @param a
 * @returns {string}
 */
const longestCommonPrefix = function (a) {
  if (a.length === 1) {
    return a[0]
  }
  const base = findBaseString(a)
  let [l, r] = [0, base.length]
  while (l < r) {
    // 非常重要
    const pivot = l + ((r - l + 1) >> 1)
    const cp = base.slice(0, pivot)
    if (isCommonPrefix(a, cp)) {
      // 第二重点
      l = pivot
    } else {
      r = pivot - 1
    }
  }
  return base.slice(0, l)
}

function isCommonPrefix(a, cp) {
  let n = a.length
  while (--n >= 0) {
    if (!a[n].startsWith(cp)) {
      return false
    }
  }
  return true
}

function findBaseString(a) {
  let min = Infinity
  let result = ''
  let n = a.length
  while (--n) {
    if (min > a[n].length) {
      min = a[n].length
      result = a[n]
    }
  }
  return result
}

module.exports = longestCommonPrefix
