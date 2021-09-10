/*
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */
/*
分治

1. 把数组一分为2, 分别找出每组的公共子串

2. getCommon(a, b)

solution()

walk(l, r) // 当前范围内的公共子串

1. 获得 pivot

const a = walk(l, pivot) //左边范围的子串
const b = walk(pivot + 1, r)

return getCommonPrefix(a, b)

// 两个字符串的公共子串，以小的长度为基准

for()

return a.slice(0, l + 1) 看是否要加1

 */

function solution(s) {
  function walk(l, r) {
    debugger
    if (l === r) {
      return s[r]
    }
    const pivot = l + ((r - l) >> 1)
    const a = walk(l, pivot)
    const b = walk(pivot + 1, r)
    return getCommonPrefix(a, b)
  }

  function getCommonPrefix(a, b) {
    const length = a.length > b.length ? b.length : a.length
    let index = 0
    while (index < length && a[index] === b[index]) {
      index++
    }
    return index ? a.slice(0, index) : ''
  }

  return walk(0, s.length - 1)
}

console.info(solution(['dog', 'racecar', 'car']))
