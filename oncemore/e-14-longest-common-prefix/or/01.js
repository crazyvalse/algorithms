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
 * 1. 以第一个数为基准
 * 2. 取出每一个字母，遍历剩下数组的每一个判断是否相等
 * @param array
 * @returns {string}
 */
const longestCommonPrefix = function (array) {
  if (!Array.isArray(array) || !array.length) {
    return ''
  }
  let result = ''
  const target = array[0]
  for (let i = 0; i < target.length; i++) {
    const c = target[i]
    for (let j = 1; j < array.length; j++) {
      if (i === array[j].length || c !== array[j][i]) {
        return result
      }
    }
    result += c
  }
  return result
}

module.exports = longestCommonPrefix
