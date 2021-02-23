/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */
/**
 * 1. 遍历每个字符
 * 2. 借助于 stack，如果是左括号就放到 stack 中
 * 3. 如果是右括号，就stack.pop 看看是不是左括号，如果不是就返回false
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const rs = Object.keys(map)
  const ss = s.split('')
  const stack = []
  let l
  for (let i = 0, char = null; (char = ss[i++]); ) {
    // 是右括号
    if (rs.indexOf(char) !== -1) {
      l = stack.pop()
      if (l !== map[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return !stack.length
}

isValid('(]')

module.exports = isValid
