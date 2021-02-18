/*
给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例 1：
输入：s = "3[a]2[bc]"
输出："aaabcbc"

示例 2：
输入：s = "3[a2[c]]"
输出："accaccacc"

示例 3：
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"

示例 4：
输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
 */
/**
 * 思路：
 * 1. 借助于stack
 *  - 当遇到 char === num || char === '[' 开始!stack.length stack.push(char)
 *  - 直到当遇到 char === ']' 时，取出 字符串以及数字，拼成新的字符串
 *  - 否则
 *  result += char
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = []
  for (const c of s) {
    if (c !== ']') {
      stack.push(c)
      continue
    }
    // 当 c 是 ] 时，需要开始处理字符串，当前c是] 不用做处理，只需要处理之前的就可以了
    // 1. 先找到 [
    // 2. 找到 数字
    // 3. s.repeat(num)
    let subStr = ''
    let t
    while ((t = stack.pop()) !== '[') {
      subStr = t + subStr
    }
    // 2. 找数字
    let num = ''
    while (/\d/.test((t = stack.pop()))) {
      num = t + num
    }

    stack.push(n)
    subStr.repeat(+num)
    stack = stack.concat(subStr.split(''))
  }
  return stack.join('')
}

module.exports = decodeString
