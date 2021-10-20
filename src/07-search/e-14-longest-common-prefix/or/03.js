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
 * 二分法：
 * 查找最小公共前缀
 * 1. 以最短的作为 base。
 * 2. 然后 判断是否是最大前缀，
 *  - 是的话，就向右移动
 *  - 不是的话，就向左移动
 *  - 知道 左右相等的时候 返回 base.slice(0, l)
 * @param array
 * @returns {string}
 */
const longestCommonPrefix = function (array) {
  if (!Array.isArray(array) || !array.length) {
    return ''
  }
  // 获得最小的一项
  const base = findShortestItem(array)
  let l = 0
  let r = base.length // 长度
  while (l < r) {
    // 长度
    const pivot = l + ((r - l + 1) >> 1)
    if (isEqual(array, pivot)) {
      l = pivot
    } else {
      r = pivot - 1
    }
  }
  return base.substr(0, l)
}

function isEqual(array, l) {
  debugger
  const commonPrefix = array[0].substr(0, l)
  let index = 1
  while (index < array.length) {
    if (array[index].substr(0, l) !== commonPrefix) {
      return false
    }
    index++
  }
  return true
}

function findShortestItem(array) {
  return array.reduce((pre, cur) => {
    if (pre.length > cur.length) {
      return cur
    }
    return pre
  }, array[0])
}

module.exports = longestCommonPrefix
