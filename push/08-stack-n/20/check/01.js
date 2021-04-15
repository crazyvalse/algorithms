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
 * 借助一个stack
 * 发现是左括号就 push
 * 发现是右括号就 pop 并且对比 popped 与 array[i] 是否相等
 *  stack.length === 0
 * @param {string} s
 * @return {boolean}
 * "()[]{}"
 */
var isValid = function (s) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const ss = s.split('')
  for (let i = 0; i < ss.length; i++) {
    const char = ss[i]
    // 是右括号
    if (map[char]) {
      const popped = stack.pop()
      if (map[char] !== popped) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return !stack.length
}

module.exports = isValid
