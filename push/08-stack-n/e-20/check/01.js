/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true

示例2：
输入：s = "()[]{}"
输出：true

示例3：
输入：s = "(]"
输出：false

示例4：
输入：s = "([)]"
输出：false

示例5：
输入：s = "{[]}"
输出：true


提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */
/**
 * 好像确实需要借助一个stack
 * 遇到左括号就推进去
 * 遇到右括号的时候 就pop一个 看看是不是
 * @param {string} s
 * @return {boolean}
 * "()[]{}"
 */
var isValid = function (s) {
  const stack = []
  const map = {
    ']': '[',
    ')': '(',
    '}': '{'
  }
  for (let i = 0, char = null; (char = s[i]); i++) {
    if (!map[char]) {
      stack.push(char)
    } else if (map[char] !== stack.pop()) {
      return false
    }
  }
  return !stack.length
}

module.exports = isValid
