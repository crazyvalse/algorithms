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
 * 借助于一个 stack
 *  - 左括号就放到 stack 中
 *  - 右括号的话就 stack.pop 查看是不是一对，不是的话 return false
 *
 *  stack.length === 0
 * @param {string} s
 * @return {boolean}
 * "()[]{}"
 */
var isValid = function (s) {
  debugger
  const ss = s.split('')
  const map = {
    ']': '[',
    '}': '{',
    ')': '('
  }

  const right = Object.keys(map)
  const stack = []

  for (let i = 0; i < ss.length; i++) {
    // 是右括号
    if (right.indexOf(ss[i]) !== -1) {
      // 弹出一个
      const char = stack.pop()
      // 判断是不是相等
      if (map[ss[i]] !== char) {
        return false
      }
      // 最括号
    } else {
      stack.push(ss[i])
    }
  }
  return stack.length === 0
}

isValid('()[]{}')

module.exports = isValid
