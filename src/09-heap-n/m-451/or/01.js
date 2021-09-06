/*
451. 根据字符出现频率排序

给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:

输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。
 */

/**
 * 暴力法：
 * 1. 放到一个map中
 * 2. 选择排序找到最大的 放到result中
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  if (!s) {
    return s
  }
  let result = ''
  let max = 0
  let key = null
  const map = new Map()
  for (let i = 0, char = null; i < s.length && (char = s[i]); i++) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }
  // 选择map中value最大的一个
  while (map.size > 0) {
    map.forEach((_value, _key) => {
      if (max < _value) {
        max = _value
        key = _key
      }
    })
    result += key.repeat(max)
    max = 0
    map.delete(key)
  }
  return result
}

module.exports = frequencySort
