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
 * 分治
 * 1. 分割成 两两一组，获得 commonPrefix
 * @param array
 * @returns {string}
 */
const longestCommonPrefix = function (array) {
  if (!Array.isArray(array) || !array.length) {
    return ''
  }
  // 分治
  const walk = function (l, r) {
    if (l === r) {
      return array[l]
    }
    const pivot = (l + (r - l)) >> 1
    const ls = walk(l, pivot)
    const rs = walk(pivot + 1, r)
    return getCommonPrefix(ls, rs)
  }

  return walk(0, array.length - 1)
}

function getCommonPrefix(a, b) {
  let index = 0
  while (index < a.length && index < b.length && a[index] === b[index]) {
    index++
  }
  return a.slice(0, index)
}

module.exports = longestCommonPrefix
