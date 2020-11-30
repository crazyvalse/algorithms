/*
给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
重复出现的子串要计算它们出现的次数。
--------------------------------------------------
示例 1 :
输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。
另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
--------------------------------------------------
示例 2 :
输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。

注意：

s.length 在1到50,000之间。
s 只包含“0”或“1”字符。
 */

/*
1. 0 1
2. 所有0和所有1都是组合在一起的
3. 重复出现的子串要计算它们出现的次数

两层遍历
1. 遍历字符 取出每一个字符
2. 取出后判断后面一个是否跟它一样 一样的话就下一位，不一样的话，就从不一样的开始取 substr(index, target.length)
target = '00'

 */

/**
 *
 * 00110011
 *
 * 00
 * 0123
 * 1 + 2
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    let target = char
    for (let j = i + 1; j < s.length; j++) {
      if (char === s[j]) {
        target += s[j]
      } else {
        if (target.length + j <= s.length) {
          if (isSame(s, j, target.length + j - 1)) {
            counter++
          }
        }
        break
      }
    }
  }

  function isSame(char, start, end) {
    let first = null
    for (let i = start; i <= end; i++) {
      if (i === start) {
        first = char[i]
      }

      if (char[i] !== first) {
        return false
      }
    }

    return true
  }
  return counter
}

module.exports = countBinarySubstrings

