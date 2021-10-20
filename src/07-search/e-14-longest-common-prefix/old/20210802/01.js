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
 * 分治算法
 * @param array
 * @returns {string}
 */
const longestCommonPrefix = function (array) {
  if (!Array.isArray(array) || !array.length) {
    return ''
  }
  const walk = function (l, r) {
    if (l === r) {
      return array[l]
    }
    const pivot = l + ((r - l) >> 1)
    return getCommonPrefix(walk(l, pivot), walk(pivot + 1, r))
  }
  return walk(0, array.length - 1)
}

function getCommonPrefix(a, b) {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) {
    i++
  }
  return a.slice(0, i)
}

console.info(getCommonPrefix('flaw', 'flax'))

module.exports = longestCommonPrefix
